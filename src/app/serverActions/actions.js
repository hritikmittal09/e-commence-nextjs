"use server";
import ConnectDb from "../api/db";
import user from "../api/models/user";

export async function signup(formdata) {
  await ConnectDb();
  try {
    const name = formdata.get("name");
    const password = formdata.get("password");
    const email = formdata.get("email");
    const existUser = await user.findOne({ email: email });
    if (existUser) {
      return {
        result: "User already exist",
      };
    }
    const newperson = new user({
      name: name,
      email: email,
      password: password,
    }); // Correct instantiation
    await newperson.save(); // Call the save method
    console.log("Data saved successfully");
    return {
      result: "success",
    };
  } catch (err) {
    return {
      result: "something went wrong",
    };
  }
  //redirect('/auth/login')
}

export async function login(formdata) {
  await ConnectDb();
  try {
    const name = formdata.get("name");
    const password = formdata.get("password");
    const email = formdata.get("email");
    const existUser = await user.findOne({ email: email });
    const ispassMatch = password == existUser.password
    if (existUser && ispassMatch) {
      return {
        result: "success",
      };
    }
  } catch (err) {
    return {
      result: "something went wrong",
    };
  }
  //redirect('/auth/login')
}
