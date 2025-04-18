import type { ITreeSelectProps } from "../../../types/components/tree-select/tree-select";

class SpecificArray extends Array {
  constructor() {
    super();
  }
  findItem(id: string | number): ITreeSelectProps["items"][number] | undefined {
    const myTree: ITreeSelectProps["items"] = [...this];

    while (myTree.length) {
      const currentNode: ITreeSelectProps["items"][number] | undefined =
        myTree.pop();

      if (currentNode && currentNode.id === id) {
        return currentNode;
      } else if (
        currentNode &&
        "children" in currentNode &&
        currentNode.children?.length
      ) {
        currentNode.children.forEach(
          (child: ITreeSelectProps["items"][number]) => {
            myTree.push(child);
          },
        );
      }
    }

    return undefined;
  }
}

export { SpecificArray };
