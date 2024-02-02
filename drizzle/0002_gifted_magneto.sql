CREATE TABLE `SCAM_TO_CATEGORY` (
	`scamId` text NOT NULL,
	`categoryId` text NOT NULL,
	PRIMARY KEY(`categoryId`, `scamId`),
	FOREIGN KEY (`scamId`) REFERENCES `SCAM`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`categoryId`) REFERENCES `CATEGORY`(`id`) ON UPDATE no action ON DELETE no action
);
