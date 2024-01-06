import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from 'lib/utils';
import React from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import {
  accordion as defaultTheme,
  outlinedVariant as outlinedTheme,
  elevatedVariant as elevatedTheme,
  ghostVariant as ghostTheme,
  softVariant as softTheme,
  outlinedElevatedVariant as outlinedElevatedTheme,
} from '@tailus/themer-accordion';
import { cva } from 'class-variance-authority';

type Variant = 'default' | 'outlined' | 'elevated' | 'ghost' | 'soft' | 'outlinedElevated';
type ElementType = keyof typeof defaultTheme;

const variantTheme = (element: ElementType) =>
  cva('', {
    variants: {
      variant: {
        default: defaultTheme[element],
        outlined: outlinedTheme[element],
        elevated: elevatedTheme[element],
        ghost: ghostTheme[element],
        soft: softTheme[element],
        outlinedElevated: outlinedElevatedTheme[element],
      },
    },
  });

const defaultContextValue: Variant = 'default';
const Context = React.createContext<Variant>(defaultContextValue);

interface AccordionRootProps {
  variant?: Variant;
}

const AccordionRoot = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & AccordionRootProps
>(({ className, variant, ...props }, forwardedRef) => {
  return (
    <Context.Provider value={variant || defaultContextValue}>
      <AccordionPrimitive.Root className={cn(variantTheme('root')({ variant: variant }), className)} {...props} ref={forwardedRef} />
    </Context.Provider>
  );
});

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, forwardedRef) => {
  const variant = React.useContext(Context);
  return <AccordionPrimitive.Item className={cn(variantTheme('item')({ variant: variant }), className)} {...props} ref={forwardedRef} />;
});

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, forwardedRef) => {
  const generateTriggerClassNames = (theme: Variant) => {
    const themes = {
      default: defaultTheme,
      outlined: outlinedTheme,
      elevated: elevatedTheme,
      ghost: ghostTheme,
      soft: softTheme,
      outlinedElevated: outlinedElevatedTheme,
    };

    return {
      parent: themes[theme].trigger.parent,
      icon: themes[theme].trigger.icon,
      content: themes[theme].trigger.content,
    };
  };

  const variant = React.useContext(Context);
  const classNamesIcon = generateTriggerClassNames(variant).icon;
  const classNamesParent = generateTriggerClassNames(variant).parent;
  const classNamesContent = generateTriggerClassNames(variant).content;
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger className={cn(classNamesParent, className)} {...props} ref={forwardedRef}>
        <div className={classNamesContent}>{children}</div>
        <ChevronDownIcon className={cn(classNamesIcon)} aria-hidden={true} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, forwardedRef) => {
  const variant = React.useContext(Context);
  return (
    <AccordionPrimitive.Content className={cn(variantTheme('content')({ variant: variant }), className)} {...props} ref={forwardedRef}>
      <div className="pb-4">{children}</div>
    </AccordionPrimitive.Content>
  );
});

export default {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
};