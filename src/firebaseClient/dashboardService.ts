import { getDatabase, push, ref, set } from "firebase/database";
import { app } from "./clientApp";

class DashboardService {
  private db = getDatabase(app);
  private dbPath = ref(this.db, "posts");

  writeUserData() {
    set(ref(this.db, `users`), {
      username: "name",
      email: "nar@mit.com",
      age: 65,
    });
  }

  pushData() {
    const newPostRef = push(this.dbPath);
    set(newPostRef, {
      username: "new",
      email: "new@mit.com",
      age: 99,
    });
  }
}

export default DashboardService;
