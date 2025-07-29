var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/common/CheckoutButton/index.tsx
import React4, { useState } from "react";

// src/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/button.tsx
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button(_a) {
  var _b = _a, {
    className,
    variant,
    size,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size",
    "asChild"
  ]);
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ React.createElement(Comp, __spreadValues({ "data-slot": "button", className: cn(buttonVariants({ variant, size, className })) }, props));
}

// src/components/ui/alert.tsx
import * as React2 from "react";
import { cva as cva2 } from "class-variance-authority";
var alertVariants = cva2(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Alert(_a) {
  var _b = _a, {
    className,
    variant
  } = _b, props = __objRest(_b, [
    "className",
    "variant"
  ]);
  return /* @__PURE__ */ React2.createElement(
    "div",
    __spreadValues({
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className)
    }, props)
  );
}
function AlertDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React2.createElement(
    "div",
    __spreadValues({
      "data-slot": "alert-description",
      className: cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )
    }, props)
  );
}

// src/components/ui/card.tsx
import * as React3 from "react";
function Card(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React3.createElement(
    "div",
    __spreadValues({
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )
    }, props)
  );
}
function CardHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React3.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )
    }, props)
  );
}
function CardTitle(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React3.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className)
    }, props)
  );
}
function CardDescription(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React3.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}
function CardContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React3.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-content",
      className: cn("px-6", className)
    }, props)
  );
}

// src/components/common/CheckoutButton/index.tsx
function CheckoutButton({ amount, currency = "eur", onCheckout }) {
  const [formState, setFormState] = useState({
    loading: false,
    error: ""
  });
  async function handleCheckout() {
    setFormState({ loading: true, error: "" });
    try {
      await onCheckout();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue";
      setFormState({ loading: false, error: errorMessage });
    }
  }
  return /* @__PURE__ */ React4.createElement("div", { className: "max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" }, /* @__PURE__ */ React4.createElement("h2", { className: "text-2xl font-bold mb-6 text-center" }, "Checkout Stripe"), /* @__PURE__ */ React4.createElement(Card, null, /* @__PURE__ */ React4.createElement(CardHeader, null, /* @__PURE__ */ React4.createElement(CardTitle, null, "Checkout Stripe"), /* @__PURE__ */ React4.createElement(CardDescription, null, "Cliquez pour \xEAtre redirig\xE9 vers la page de paiement s\xE9curis\xE9e")), /* @__PURE__ */ React4.createElement(CardContent, null, formState.error && /* @__PURE__ */ React4.createElement(Alert, { variant: "destructive", className: "mb-4" }, /* @__PURE__ */ React4.createElement(AlertDescription, null, formState.error)), amount && /* @__PURE__ */ React4.createElement("div", { className: "mb-4 p-3 bg-gray-50 rounded-md" }, /* @__PURE__ */ React4.createElement("p", { className: "text-sm text-gray-600" }, /* @__PURE__ */ React4.createElement("strong", null, "Montant:"), " ", amount, " ", currency.toUpperCase())), /* @__PURE__ */ React4.createElement(Button, { onClick: handleCheckout, className: "w-full", disabled: formState.loading }, formState.loading ? "Redirection..." : "Payer maintenant"))));
}

// src/components/landing/Hero/index.tsx
import React5 from "react";
import Image from "next/image";
import { CircleChevronRight } from "lucide-react";
function Hero() {
  return /* @__PURE__ */ React5.createElement("section", { className: "hero pt-4 md:pt-48 flex justify-center items-center" }, /* @__PURE__ */ React5.createElement("div", { className: "hero-content text-center" }, /* @__PURE__ */ React5.createElement("div", { className: "max-w-3xl flex-col flex-1" }, /* @__PURE__ */ React5.createElement(
    "a",
    {
      href: "https://www.producthunt.com/posts/womi?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-womi",
      target: "_blank",
      className: "justify-center items-center flex mb-6"
    },
    /* @__PURE__ */ React5.createElement(
      Image,
      {
        src: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=960432&theme=light&t=1746203235854",
        alt: "Womi - Test your business idea before wasting time (or money) | Product Hunt",
        style: { width: 250, height: 54 },
        width: "250",
        height: "54"
      }
    )
  ), /* @__PURE__ */ React5.createElement("h1", { className: "text-3xl md:text-5xl font-bold text-gray-800" }, "Testez votre id\xE9e de business avant de perdre du temps (ou de l'argent)"), /* @__PURE__ */ React5.createElement("p", { className: "py-6 text-xl text-gray-800" }, "Notre IA analyse votre id\xE9e sous tous les angles \u2013 march\xE9, cible, probl\xE8me, solution, business model \u2013 et vous fournit une validation claire, rapide et visuelle."), /* @__PURE__ */ React5.createElement(Button, null, "Testez votre id\xE9e", /* @__PURE__ */ React5.createElement(CircleChevronRight, { className: "w-4 h-4" })), /* @__PURE__ */ React5.createElement("div", { className: "max-w-2xl mx-auto relative flex justify-center mt-12" }, /* @__PURE__ */ React5.createElement(Image, { src: "/icon/arrow_4.svg", alt: "Fl\xE8che d\xE9corative", width: 40, height: 200 })))));
}
export {
  CheckoutButton,
  Hero
};
