CREATE TABLE `IMAGE` (
	`id` text,
	`url` text NOT NULL,
	`scamId` text NOT NULL,
	FOREIGN KEY (`scamId`) REFERENCES `SCAM`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
DROP TABLE `USER`;