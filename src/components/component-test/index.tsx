"use client";

import { CheckoutButton } from "../common/CheckoutButton";

export function ComponentTest() {
  return <CheckoutButton amount={1000} currency="eur" onCheckout={async () => {}} />;
}
