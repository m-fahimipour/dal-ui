import { createElement } from "react";

import type { ITreeSelectProps } from "../../types/components/tree-select/tree-select";

export function useTreeSelect() {
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
      } else if (currentNode) {
        currentNode.element = createElement(Accordion, {
          isChecked: currentNode.isChecked,
          label: currentNode.label,
          key: currentNode.value,
        });
      }
    }

    // create element for rest nodes
    while (restNodes.length) {
      const currentNode: ITreeSelectProps["items"][number] | undefined =
        restNodes.shift();

      if (currentNode) {
        currentNode.element = createElement(
          Accordion,
          {
            isChecked: currentNode.isChecked,
            label: currentNode.label,
            key: currentNode.value,
          },

          currentNode.children?.map(
            (child: ITreeSelectProps["items"][number]) => child.element,
          ),
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
