// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $$$$$$$$$0 from "./actions/amasty/submitReview.ts";
import * as $$$$$$$$$1 from "./actions/cart/addCoupon.ts";
import * as $$$$$$$$$2 from "./actions/cart/addItem.ts";
import * as $$$$$$$$$3 from "./actions/cart/removeCoupon.ts";
import * as $$$$$$$$$4 from "./actions/cart/removeItem.ts";
import * as $$$$$$$$$5 from "./actions/cart/setSimulation.ts";
import * as $$$$$$$$$6 from "./actions/cart/simulation.ts";
import * as $$$$$$$$$7 from "./actions/cart/updateItem.ts";
import * as $$$$$$$$$8 from "./actions/newsletter/subscribe.ts";
import * as $$$$$$$$$9 from "./actions/wishlist/addItem.ts";
import * as $$$$$$$$$10 from "./actions/wishlist/removeItem.ts";
import * as $0 from "./functions/requestToPathname.ts";
import * as $$$$0 from "./handlers/sitemap.ts";
import * as $$$0 from "./loaders/cart.ts";
import * as $$$1 from "./loaders/product/detailsPage.ts";
import * as $$$2 from "./loaders/product/detailsPageGQL.ts";
import * as $$$3 from "./loaders/product/extensions/amasty/detailsPage.ts";
import * as $$$4 from "./loaders/product/extensions/amasty/list.ts";
import * as $$$5 from "./loaders/product/extensions/amasty/listingPage.ts";
import * as $$$6 from "./loaders/product/extensions/extend.ts";
import * as $$$7 from "./loaders/product/getId.ts";
import * as $$$8 from "./loaders/product/list.ts";
import * as $$$9 from "./loaders/product/listingPage.ts";
import * as $$$10 from "./loaders/proxy.ts";
import * as $$$11 from "./loaders/user.ts";
import * as $$$12 from "./loaders/wishlist.ts";

const manifest = {
  "functions": {
    "magento/functions/requestToPathname.ts": $0,
  },
  "loaders": {
    "magento/loaders/cart.ts": $$$0,
    "magento/loaders/product/detailsPage.ts": $$$1,
    "magento/loaders/product/detailsPageGQL.ts": $$$2,
    "magento/loaders/product/extensions/amasty/detailsPage.ts": $$$3,
    "magento/loaders/product/extensions/amasty/list.ts": $$$4,
    "magento/loaders/product/extensions/amasty/listingPage.ts": $$$5,
    "magento/loaders/product/extensions/extend.ts": $$$6,
    "magento/loaders/product/getId.ts": $$$7,
    "magento/loaders/product/list.ts": $$$8,
    "magento/loaders/product/listingPage.ts": $$$9,
    "magento/loaders/proxy.ts": $$$10,
    "magento/loaders/user.ts": $$$11,
    "magento/loaders/wishlist.ts": $$$12,
  },
  "handlers": {
    "magento/handlers/sitemap.ts": $$$$0,
  },
  "actions": {
    "magento/actions/amasty/submitReview.ts": $$$$$$$$$0,
    "magento/actions/cart/addCoupon.ts": $$$$$$$$$1,
    "magento/actions/cart/addItem.ts": $$$$$$$$$2,
    "magento/actions/cart/removeCoupon.ts": $$$$$$$$$3,
    "magento/actions/cart/removeItem.ts": $$$$$$$$$4,
    "magento/actions/cart/setSimulation.ts": $$$$$$$$$5,
    "magento/actions/cart/simulation.ts": $$$$$$$$$6,
    "magento/actions/cart/updateItem.ts": $$$$$$$$$7,
    "magento/actions/newsletter/subscribe.ts": $$$$$$$$$8,
    "magento/actions/wishlist/addItem.ts": $$$$$$$$$9,
    "magento/actions/wishlist/removeItem.ts": $$$$$$$$$10,
  },
  "name": "magento",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;