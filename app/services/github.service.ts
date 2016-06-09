import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

@Injectable()
export class GithubService {
	constructor(private http: Http){}

	getRepos(username: string) {
		return this.http.get(`https://api.github.com/users/${username}/repos`);
	}
}