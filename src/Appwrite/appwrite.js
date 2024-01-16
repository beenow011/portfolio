import conf from './conf.js';
import { Client, Account, ID, Databases, Storage } from "appwrite";
// import * as appwrite from 'node-appwrite';

export class AuthService {
    client = new Client();
    account;
    users;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);

    }


    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }





    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

    async uploadFile(file) {
        try {
            const res = await this.storage.createFile(
                conf.appwritePostId,
                ID.unique(),
                file
            )
            console.log(res)
            if (res) {
                try {
                    const promise = await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, ID.unique(), { id: res.$id });
                    return res;
                } catch (err) {
                    console.log(err)
                }
            }
        } catch (error) {
            console.log(file)
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async getImageId() {
        try {
            const res = await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId)
            return res;
        } catch (err) {
            console.log(err)
        }
    }

    getFiles(fileId) {
        try {
            const file = fileId
            const preview = this.storage.getFilePreview(
                conf.appwritePostId,
                file
            )
            return preview
        } catch (error) {
            console.log("Appwrite serive :: getFiles :: error", error)
        }

    }
}

const authService = new AuthService();

export default authService