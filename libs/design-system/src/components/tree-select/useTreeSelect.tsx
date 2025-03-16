import { createElement } from "react";

import type { ITreeSelectProps } from "../../types/components/tree-select/tree-select";
import { TreeSelectAccordion } from "./components/TreeSelectAccordion";
import { TreeSelectItem } from "./components/TreeSelectItem";

interface IUseTreeSelect {
  itemProps?: ITreeSelectProps["itemProps"];
  accordionProps?: ITreeSelectProps["accordionProps"];
}

export function useTreeSelect({ itemProps, accordionProps }: IUseTreeSelect) {
  // function for create tree
  function createTree(
    data: ITreeSelectProps["items"],
  ): ITreeSelectProps["items"] {
    const myTree: ITreeSelectProps["items"] = [...structuredClone(data)];
    const restNodes: ITreeSelectProps["items"] = [];
    while (myTree.length) {
      const currentNode: ITreeSelectProps["items"][number] | undefined =
        myTree.pop();

      // check currentNode has children or not
      if (currentNode?.children?.length) {
        restNodes.unshift(currentNode);
        currentNode.children.forEach(
          (child: ITreeSelectProps["items"][number]) => {
            child.hasParent = true;
            myTree.push(child);
          },
        );

        // create element for last nodes on tree
      } else if (currentNode && currentNode.type == "item") {
        currentNode.element = createElement(
          TreeSelectItem,
          {
            key: currentNode.id,
            item: {
              ...currentNode,
              ...(itemProps && {
                itemProps: {
                  wrapperProps: {
                    ...itemProps.wrapperProps,
                    ...currentNode.itemProps.wrapperProps,
                  },
                  typographyProps: {
                    ...itemProps.typographyProps,
                    ...currentNode.itemProps.typographyProps,
                  },
                  checkboxProps: {
                    ...itemProps.checkboxProps,
                    ...currentNode.itemProps.checkboxProps,
                  },
                },
              }),
            },
          },
          null,
        );
      }
    }

    // create element for rest nodes
    while (restNodes.length) {
      const currentNode: ITreeSelectProps["items"][number] | undefined =
        restNodes.shift();

      if (currentNode && currentNode.type == "accordion") {
        currentNode.element = createElement(
          TreeSelectAccordion,
          {
            key: currentNode.id,
            item: {
              ...currentNode,
              ...(accordionProps && {
                accordionProps: {
                  wrapperProps?: { ...accordionProps.wrapperProps, ...currentNode.accordionProps.wrapperProps },
                  summaryProps?: { ...accordionProps.summaryProps, ...currentNode.accordionProps.summaryProps },
                  detailsProps?: { ...accordionProps.detailsProps, ...currentNode.accordionProps.detailsProps }
                }
              }),
              details: currentNode.children?.map(
                (child: ITreeSelectProps["items"][number]) => child.element,
              ),
            },
          },
          null,
        );
        if (!currentNode.hasParent) myTree.push(currentNode);
      }
    }

    return myTree;
  }

  return {
    createTree,
  };
}
