DROP INDEX IF EXISTS `TAGS_name_unique`;--> statement-breakpoint
CREATE UNIQUE INDEX `TAGS_value_unique` ON `TAGS` (`value`);