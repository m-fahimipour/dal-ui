import { createElement } from "react";

import type { ITreeSelectProps } from "../../types/components/tree-select/tree-select";
import { TreeSelectAccordion } from "./components/TreeSelectAccordion";
import { TreeSelectItem } from "./components/TreeSelectItem";

interface IUseTreeSelect {
  itemProps?: ITreeSelectProps["itemProps"];
  accordionProps?: ITreeSelectProps["accordionProps"];
}

export function useTreeSelect({ accordionProps, itemProps }: IUseTreeSelect) {
  function createAccordionStyles(
    globalStyle?: ITreeSelectProps["accordionProps"],
    itemStyle?: ITreeSelectProps["accordionProps"],
  ): ITreeSelectProps["accordionProps"] {
    return {
      wrapperProps: {
        ...(globalStyle && globalStyle.wrapperProps),
        ...(itemStyle && itemStyle.wrapperProps),
      },
      detailsProps: {
        ...(globalStyle && globalStyle.detailsProps),
        ...(itemStyle && itemStyle.detailsProps),
      },
      summaryProps: {
        ...(globalStyle && globalStyle.summaryProps),
        ...(itemStyle && itemStyle.summaryProps),
      },
    };
  }

  function createNormalItemStyles(
    globalStyle?: ITreeSelectProps["itemProps"],
    itemStyle?: ITreeSelectProps["itemProps"],
  ): ITreeSelectProps["itemProps"] {
    return {
      wrapperProps: {
        ...(globalStyle && globalStyle.wrapperProps),
        ...(itemStyle && itemStyle.wrapperProps),
      },
      typographyProps: {
        ...(globalStyle && globalStyle.typographyProps),
        ...(itemStyle && itemStyle.typographyProps),
      },
      checkboxProps: {
        ...(globalStyle && globalStyle.checkboxProps),
        ...(itemStyle && itemStyle.checkboxProps),
      },
    };
  }

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
      if (
        currentNode &&
        "children" in currentNode &&
        currentNode.children?.length
      ) {
        restNodes.unshift(currentNode);
        currentNode.children.forEach(
          (child: ITreeSelectProps["items"][number]) => {
            child.hasParent = true;
            myTree.push(child);
          },
        );

        // create element for last nodes on tree
      } else if (currentNode && currentNode.type == "simple-item") {
        currentNode.element = createElement(
          TreeSelectItem,
          {
            key: currentNode.id,
            item: {
              ...currentNode,
              itemProps: createNormalItemStyles(
                itemProps,
                currentNode.itemProps,
              ),
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

      if (currentNode && currentNode.type == "accordion-item") {
        currentNode.element = createElement(
          TreeSelectAccordion,
          {
            key: currentNode.id,
            item: {
              ...currentNode,
              accordionProps: createAccordionStyles(
                accordionProps,
                currentNode.accordionProps,
              ),
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
