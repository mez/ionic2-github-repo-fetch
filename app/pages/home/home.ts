import {Page} from "ionic-angular";
import {GitHubService} from "../../services/github";
import {GitHubRepoComponent} from "../github/githubrepo";


@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [GitHubService],
  directives: [GitHubRepoComponent]
})
export class HomePage {
	public foundRepos;
	public username;

  constructor(private github: GitHubService) {}

  getRepos() {
		this.github.getRepos(this.username).subscribe(
			(data) => {
				this.foundRepos = data.json().reverse();
			},
			(error) => {
				console.error("Github Service Error: ", error);
			},
			() => { console.info('getRepos completed');}
		);
  }

}
