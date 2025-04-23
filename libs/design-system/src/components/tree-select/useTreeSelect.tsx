import {
  createElement,
  useLayoutEffect,
  useRef,
  useState,
  useMemo,
} from "react";

import type {
  ITreeSelectProps,
  TTreeSelectItem,
} from "../../types/components/tree-select/tree-select";
import { TreeSelectAccordion } from "./components/TreeSelectAccordion";
import { TreeSelectItem } from "./components/TreeSelectItem";
import { TreeNodeArray } from "./helper/method";

interface IUseTreeSelect extends ITreeSelectProps {}

export function useTreeSelect({
  items,
  accordionProps,
  itemProps,
  changeHandler,
}: IUseTreeSelect) {
  const [updateUI, setUpdateUI] = useState<number>(0);
  const clonedItems = useMemo<TreeNodeArray<TTreeSelectItem>>(() => {
    return TreeNodeArray.from(structuredClone(items));
  }, []);

  const dataRef = useRef<TreeNodeArray<TTreeSelectItem>>(clonedItems);

  function onChange(selectedItem: TTreeSelectItem): void {
    TreeNodeArray.updateChildrenCheckState(
      dataRef.current,
      selectedItem.id,
      !selectedItem.isChecked,
    );

    TreeNodeArray.updateParentsCheckState(dataRef.current, selectedItem);

    TreeNodeArray.updateIndeterminateState(dataRef.current, selectedItem);

    dataRef.current = createTreeUI(dataRef.current);
    changeHandler?.(dataRef.current);
    setUpdateUI((c) => c + 1);
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
    data: TreeNodeArray<TTreeSelectItem>,
  ): TreeNodeArray<TTreeSelectItem> {
    const myTree: TreeNodeArray<TTreeSelectItem> = TreeNodeArray.from(data);
    const restNodes: TreeNodeArray<TTreeSelectItem> =
      new TreeNodeArray<TTreeSelectItem>();

    while (myTree.length) {
      const currentNode: TTreeSelectItem | undefined = myTree.pop();

      // check currentNode has children or not
      if (
        currentNode &&
        "children" in currentNode &&
        currentNode.children?.length
      ) {
        restNodes.unshift(currentNode);
        currentNode.children.forEach((child: TTreeSelectItem) => {
          child.parentId = currentNode.id;
          myTree.push(child);
        });

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
            onChangeHandler: onChange,
          },
          null,
        );
      }
    }

    // create element for rest nodes
    while (restNodes.length) {
      const currentNode: TTreeSelectItem | undefined = restNodes.shift();

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
                (child: TTreeSelectItem) => child.element,
              ),
            },
            onChangeHandler: onChange,
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
