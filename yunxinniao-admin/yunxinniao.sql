CREATE TABLE IF NOT EXISTS photo (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  src text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `photopic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `src` text NOT NULL,
  `photoid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `personid` (`photoid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

ALTER TABLE `photopic`
  ADD CONSTRAINT FOREIGN KEY (`photoid`) REFERENCES photo (`id`);

DROP TRIGGER IF EXISTS `photo_pic`;
DELIMITER //
CREATE TRIGGER `photo_pic` AFTER INSERT ON photo
 FOR EACH ROW BEGIN
        INSERT INTO `photopic` SET src= 'http://gw.alicdn.com/tfs/TB1_NDSPVXXXXcUXVXXXXXXXXXX-900-500.jpg', photoid=NEW.id;
		INSERT INTO `photopic` SET src= 'http://gw.alicdn.com/tfs/TB1_NDSPVXXXXcUXVXXXXXXXXXX-900-500.jpg', photoid=NEW.id;
		INSERT INTO `photopic` SET src= 'http://gw.alicdn.com/tfs/TB1_NDSPVXXXXcUXVXXXXXXXXXX-900-500.jpg', photoid=NEW.id;
		INSERT INTO `photopic` SET src= 'http://gw.alicdn.com/tfs/TB1_NDSPVXXXXcUXVXXXXXXXXXX-900-500.jpg', photoid=NEW.id;
		INSERT INTO `photopic` SET src= 'http://gw.alicdn.com/tfs/TB1_NDSPVXXXXcUXVXXXXXXXXXX-900-500.jpg', photoid=NEW.id;
    END
//
DELIMITER ;
DROP TRIGGER IF EXISTS `photo_pic_delete`;
DELIMITER //
CREATE TRIGGER `photo_pic_delete` BEFORE DELETE ON photo
 FOR EACH ROW BEGIN
        DELETE FROM `photopic` WHERE `photoid` = old.id;
    END
//
DELIMITER ;