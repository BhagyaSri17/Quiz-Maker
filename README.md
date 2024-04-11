This is the DataBase Schema for Question table
"
DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `id` int NOT NULL,
  `category` varchar(45) DEFAULT NULL,
  `difficultylevel` varchar(45) DEFAULT NULL,
  `option1` varchar(45) DEFAULT NULL,
  `option2` varchar(45) DEFAULT NULL,
  `option3` varchar(45) DEFAULT NULL,
  `option4` varchar(45) DEFAULT NULL,
  `question_title` varchar(200) DEFAULT NULL,
  `right_answer` varchar(45) DEFAULT NULL,
  `difficulty_level` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;" 



Service Registry is responsible to communicate between Question MicroService and Quiz MicroService.
