import { createContext, useContext, type ReactNode } from "react";

import type { IValueAccordionContext } from "./type";

const AccordionContext = createContext<IValueAccordionContext>({});

export function AccordionContextProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: IValueAccordionContext;
}) {
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
}

export function useAccordionContext(): IValueAccordionContext {
  const data: IValueAccordionContext | null | undefined =
    useContext(AccordionContext);

  if (!data) throw new Error("please use AccordionContext Provider");

  return data;
}
