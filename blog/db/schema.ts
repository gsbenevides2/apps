import {
  integer,
  sqliteTable,
  text,
} from "https://esm.sh/drizzle-orm@0.30.10/sqlite-core";

export const rating = sqliteTable("rating", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  itemReviewed: text("itemReviewed").notNull(),
  author: text("author", { mode: "json" }),
  ratingValue: (integer("ratingValue")).notNull(),
  additionalType: text("additionalType"),
});

export const review = sqliteTable("review", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  itemReviewed: text("itemReviewed").notNull(),
  author: text("author", { mode: "json" }),
  datePublished: (text("datePublished")).notNull(),
  dateModified: (text("dateModified")).notNull(),
  reviewHeadline: (text("reviewHeadline")),
  reviewBody: (text("reviewBody")).notNull(),
  additionalType: (text("additionalType")),
  isAnonymous: integer("isAnonymous", { mode: "boolean" }),
});