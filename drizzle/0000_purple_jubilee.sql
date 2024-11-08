CREATE TABLE `candidate` (
	`id` int AUTO_INCREMENT NOT NULL,
	`number` int,
	`description` text DEFAULT (''),
	`name` varchar(225) NOT NULL,
	`vision` text DEFAULT (''),
	`mision` text DEFAULT (''),
	`work_program` text,
	`image` varchar(225) NOT NULL,
	`video` varchar(225),
	CONSTRAINT `candidate_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `classes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(225),
	`active` boolean DEFAULT true,
	CONSTRAINT `classes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `students` (
	`nisn` varchar(10) NOT NULL,
	`name` varchar(225),
	`class_id` int,
	CONSTRAINT `students_nisn` PRIMARY KEY(`nisn`)
);
--> statement-breakpoint
ALTER TABLE `students` ADD CONSTRAINT `students_class_id_classes_id_fk` FOREIGN KEY (`class_id`) REFERENCES `classes`(`id`) ON DELETE no action ON UPDATE no action;