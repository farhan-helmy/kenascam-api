CREATE TABLE `COMMENT` (
	`id` text PRIMARY KEY NOT NULL,
	`nickname` text NOT NULL,
	`content` text NOT NULL,
	`createdAt` text,
	`updatedAt` text,
	`scamId` text NOT NULL,
	FOREIGN KEY (`scamId`) REFERENCES `SCAM`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `IMAGE` (
	`id` text PRIMARY KEY NOT NULL,
	`url` text NOT NULL,
	`scamId` text NOT NULL,
	FOREIGN KEY (`scamId`) REFERENCES `SCAM`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `SCAM_TO_TAGS` (
	`scamId` text NOT NULL,
	`tagId` text NOT NULL,
	PRIMARY KEY(`scamId`, `tagId`),
	FOREIGN KEY (`scamId`) REFERENCES `SCAM`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`tagId`) REFERENCES `TAGS`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `SCAM` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`platform` text,
	`scammerInfo` text,
	`isApproved` integer DEFAULT false,
	`createdAt` text,
	`updatedAt` text
);
--> statement-breakpoint
CREATE TABLE `TAGS` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`value` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `TAGS_value_unique` ON `TAGS` (`value`);