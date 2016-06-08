import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Repo} from "../pages/github/repo"

@Injectable()
export class GitHubService {
	constructor(private http: Http){}

	getRepos(username: string) {
		return this.http.get(`https://api.github.com/users/${username}/repos`);
	}
}