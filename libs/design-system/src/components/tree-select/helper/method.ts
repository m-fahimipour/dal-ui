import type { TTreeSelectItem } from "../../../types/components/tree-select/tree-select";

class SpecificArray<T> extends Array<T> {
  constructor() {
    super();
  }

  static override from<T>(items: ArrayLike<T> | Iterable<T>): SpecificArray<T> {
    const arr = new SpecificArray<T>();
    for (const item of super.from(items)) {
      arr.push(item);
    }

    return arr;
  }

  static updateChildrenCheckState(
    array: SpecificArray<TTreeSelectItem>,
    id: string | number,
    isChecked: boolean,
  ): void {
    const selectedItem: TTreeSelectItem | undefined = array.findItem(id);

    if (selectedItem) {
      const myTree: SpecificArray<TTreeSelectItem> =
        SpecificArray.from<TTreeSelectItem>([selectedItem]);

      while (myTree.length) {
        const currentNode: TTreeSelectItem | undefined = myTree.pop();
        if (currentNode && currentNode.type === "simple-item") {
          currentNode.isChecked = isChecked;
        } else if (currentNode && currentNode.type === "accordion-item") {
          currentNode.isChecked = isChecked;
          currentNode.isIndeterminate = false;
          currentNode.children?.forEach((child: TTreeSelectItem) => {
            myTree.push(child);
          });
        }
      }
    }
  }

  static updateParentsCheckState(
    array: SpecificArray<TTreeSelectItem>,
    item: TTreeSelectItem,
  ) {
    const parentItem: TTreeSelectItem | undefined = array.findItem(
      item.parentId,
    );

    if (parentItem) {
      const myQueue: SpecificArray<TTreeSelectItem> =
        SpecificArray.from<TTreeSelectItem>([parentItem]);

      while (myQueue.length) {
        const pItem: TTreeSelectItem | undefined = myQueue.pop();
        if (pItem?.type === "accordion-item") {
          const isCheckedAllChild: boolean | undefined = pItem.children?.every(
            (item) => item.isChecked,
          );
          if (isCheckedAllChild) {
            pItem.isChecked = true;
          } else {
            pItem.isChecked = false;
          }
        }

        if (pItem?.parentId) {
          const parentItem = array.findItem(pItem.parentId);
          if (parentItem) myQueue.unshift(parentItem);
        }
      }
    }
  }

  static updateIndeterminateState(
    array: SpecificArray<TTreeSelectItem>,
    item: TTreeSelectItem,
  ) {
    const parentItem: TTreeSelectItem | undefined = array.findItem(
      item.parentId,
    );

    if (parentItem) {
      const myQueue: SpecificArray<TTreeSelectItem> =
        SpecificArray.from<TTreeSelectItem>([parentItem]);

      while (myQueue.length) {
        const pItem: TTreeSelectItem | undefined = myQueue.pop();
        if (pItem?.type === "accordion-item" && !pItem.isChecked) {
          pItem.isIndeterminate = pItem.children?.some(
            (child: TTreeSelectItem) =>
              child.isChecked || child.isIndeterminate,
          );

          if (pItem?.parentId) {
            const parentItem = array.findItem(pItem.parentId);
            if (parentItem) myQueue.unshift(parentItem);
          }
        }
      }
    }
  }

  findItem(
    this: SpecificArray<TTreeSelectItem>,
    id?: string | number,
  ): TTreeSelectItem | undefined {
    if (!id) return;

    const myTree: SpecificArray<TTreeSelectItem> =
      SpecificArray.from<TTreeSelectItem>(this);

    while (myTree.length) {
      const currentNode: TTreeSelectItem | undefined = myTree.pop();

      if (currentNode && currentNode.id === id) {
        return currentNode;
      } else if (
        currentNode &&
        "children" in currentNode &&
        currentNode.children?.length
      ) {
        currentNode.children.forEach((child: TTreeSelectItem) => {
          myTree.push(child);
        });
      }
    }

    return undefined;
  }
}

export { SpecificArray };
