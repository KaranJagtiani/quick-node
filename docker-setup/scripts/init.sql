create user rocketship with password 'airbus737';
alter role rocketship superuser createrole createdb replication;
create database quicknode;
create database quicknode_test;
alter database quicknode owner to rocketship;
alter database quicknode_test owner to rocketship;
