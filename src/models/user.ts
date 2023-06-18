import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../utils/database";

interface UserAttribute {
  id: number;
  email?: string;
  password?: string;
}

interface UserCreationAttribute extends Optional<UserAttribute, "id"> {}

class User extends Model<UserAttribute, UserCreationAttribute> {
  public id!: number;
  public email!: string;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize,
    timestamps: true,
    paranoid: true,
  }
);

export default User;
