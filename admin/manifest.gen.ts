// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $$$0 from "./loaders/blocks/revision.ts";
import * as $$$1 from "./loaders/blocks/published.ts";
import * as $$$2 from "./loaders/blocks/latest.ts";
import * as $$$3 from "./loaders/blocks/listRevisions.ts";
import * as $$$4 from "./loaders/state.ts";
import * as $$$5 from "./loaders/releases/blocks.ts";
import * as $$$6 from "./loaders/pages/list.ts";
import * as $$$$$$$$$0 from "./actions/blocks/publish.ts";
import * as $$$$$$$$$1 from "./actions/blocks/restore.ts";
import * as $$$$$$$$$2 from "./actions/blocks/safeDelete.ts";
import * as $$$$$$$$$3 from "./actions/blocks/newRevision.ts";
import * as $$$$$$$$$4 from "./actions/blocks/delete.ts";
import * as $$$$$$$$$5 from "./actions/pages/publish.ts";
import * as $$$$$$$$$6 from "./actions/pages/new.ts";

const manifest = {
  "loaders": {
    "deco-sites/admin/loaders/blocks/latest.ts": $$$2,
    "deco-sites/admin/loaders/blocks/listRevisions.ts": $$$3,
    "deco-sites/admin/loaders/blocks/published.ts": $$$1,
    "deco-sites/admin/loaders/blocks/revision.ts": $$$0,
    "deco-sites/admin/loaders/pages/list.ts": $$$6,
    "deco-sites/admin/loaders/releases/blocks.ts": $$$5,
    "deco-sites/admin/loaders/state.ts": $$$4,
  },
  "actions": {
    "deco-sites/admin/actions/blocks/delete.ts": $$$$$$$$$4,
    "deco-sites/admin/actions/blocks/newRevision.ts": $$$$$$$$$3,
    "deco-sites/admin/actions/blocks/publish.ts": $$$$$$$$$0,
    "deco-sites/admin/actions/blocks/restore.ts": $$$$$$$$$1,
    "deco-sites/admin/actions/blocks/safeDelete.ts": $$$$$$$$$2,
    "deco-sites/admin/actions/pages/new.ts": $$$$$$$$$6,
    "deco-sites/admin/actions/pages/publish.ts": $$$$$$$$$5,
  },
  "name": "deco-sites/admin",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;
