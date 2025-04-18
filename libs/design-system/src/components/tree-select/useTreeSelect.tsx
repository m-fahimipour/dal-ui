import { createElement, useLayoutEffect, useRef, useState } from "react";

import type { ITreeSelectProps } from "../../types/components/tree-select/tree-select";
import { TreeSelectAccordion } from "./components/TreeSelectAccordion";
import { TreeSelectItem } from "./components/TreeSelectItem";
import { SpecificArray } from "./helper/method";

interface IUseTreeSelect extends ITreeSelectProps {}

export function useTreeSelect({
  items,
  accordionProps,
  itemProps,
}: IUseTreeSelect) {
  const dataRef = useRef<IUseTreeSelect["items"]>(
    SpecificArray.from(structuredClone(items)),
  );
  const [updateUI, setUpdateUI] = useState<number>(0);

  function changeHandler(selectedItem: IUseTreeSelect["items"][number]): void {
    const foundItem: IUseTreeSelect["items"][number] | undefined =
      dataRef.current["findItem"]?.(selectedItem.id);
    const parentItem: IUseTreeSelect["items"][number] | undefined =
      dataRef.current["findItem"]?.(selectedItem.parentId);

    if (foundItem) {
      foundItem.isChecked = !foundItem.isChecked;
      if (foundItem.type === "accordion-item") {
        foundItem.children?.forEach((item) => {
          item.isChecked = foundItem.isChecked;
        });
      }
      if (parentItem && parentItem.type === "accordion-item") {
        const isCheckedAllChild: boolean | undefined =
          parentItem.children?.every((item) => item.isChecked);
        if (isCheckedAllChild) {
          parentItem.isChecked = true;
        } else {
          parentItem.isChecked = false;
        }
      }
      dataRef.current = createTreeUI(dataRef.current);
      setUpdateUI((c) => c + 1);
    }

  }

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
  function createTreeUI(
    data: ITreeSelectProps["items"],
  ): ITreeSelectProps["items"] {
    const myTree: ITreeSelectProps["items"] = SpecificArray.from(data);
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
            child.parentId = currentNode.id;
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
            onChangeHandler: changeHandler,
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
            onChangeHandler: changeHandler,
          },
          null,
        );
        if (!currentNode.parentId) myTree.push(currentNode);
      }
    }

    return myTree;
  }

  useLayoutEffect(() => {
    dataRef.current = createTreeUI(dataRef.current);
    setUpdateUI((c) => c + 1);
  }, []);

  return {
    data: dataRef.current,
  };
}
