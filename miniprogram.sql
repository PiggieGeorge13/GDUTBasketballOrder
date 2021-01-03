/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80019
Source Host           : localhost:3306
Source Database       : miniprogram

Target Server Type    : MYSQL
Target Server Version : 80019
File Encoding         : 65001

Date: 2021-01-03 18:28:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for collect
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `poster` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of collect
-- ----------------------------
INSERT INTO `collect` VALUES ('1481164987', '会不会（吉他版）', '刘大壮', 'http://m8.music.126.net/20201121163740/0d92f9332fdab10291daf9106f545ba0/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/4110448227/a020/49fb/4f7c/88f3907dd4e4d94ba61ee2a207b2608a.mp3', 'https://p2.music.126.net/SFXsIYI3hCCedvbqrvVytA==/109951165335411992.jpg', 'null');
INSERT INTO `collect` VALUES ('1496602290', '是但求其爱', '陈奕迅', 'http://m701.music.126.net/20201121011410/c5c3832238551b64115d6550a7f643f4/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/4903215477/76c6/bb1b/954a/53a1d088398dd7a4e6287342136e7e6c.mp3', 'https://p1.music.126.net/flFrObLA9GZdj8B0b6ni1A==/109951165480807278.jpg', 'zxw');

-- ----------------------------
-- Table structure for ordering
-- ----------------------------
DROP TABLE IF EXISTS `ordering`;
CREATE TABLE `ordering` (
  `ordernum` varchar(255) NOT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `phonenum` varchar(255) DEFAULT NULL,
  `appointmenttime` varchar(255) DEFAULT NULL,
  `appointmentnum` varchar(255) DEFAULT NULL,
  `ordertime` varchar(255) DEFAULT NULL,
  `moneynum` varchar(255) DEFAULT NULL,
  `orderstate` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ordernum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of ordering
-- ----------------------------
INSERT INTO `ordering` VALUES ('111', '111', '111', '111', '3', '2021年1月3日', '0', '待审核');
INSERT INTO `ordering` VALUES ('111111111', 'c3-501', '13760881588', '2021年1月13日下午5点', '12', '2021年1月4日下午6点', '24', '待审核');
INSERT INTO `ordering` VALUES ('123', '123', '123', '123', '123', '2021年1月3日', '0', '待审核');
INSERT INTO `ordering` VALUES ('123456', '张旭伟', '111111111', '2021.01.16', '6', '2021年1月3日', '0', '待审核');
INSERT INTO `ordering` VALUES ('123456789', '11111', '13760221584', '2021年1月4日下午4点', '15', '2021年1月2日下午4点半', '24', '待审批');
INSERT INTO `ordering` VALUES ('333', 'zxw', '13054489935', '2021.02.28', '6', '2021年1月3日', '0', '待审核');

-- ----------------------------
-- Table structure for payhistory
-- ----------------------------
DROP TABLE IF EXISTS `payhistory`;
CREATE TABLE `payhistory` (
  `ordernum` varchar(255) NOT NULL,
  `moneynum` varchar(255) DEFAULT NULL,
  `paytime` varchar(255) DEFAULT NULL,
  `payway` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ordernum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of payhistory
-- ----------------------------
INSERT INTO `payhistory` VALUES ('123456789', '24', '2021年1月2日下午5点', '微信支付');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('110', '110', '用户');
INSERT INTO `user` VALUES ('119', '119', '用户');
INSERT INTO `user` VALUES ('13760221584', '123456', '用户');
