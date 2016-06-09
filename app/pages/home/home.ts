import {Page} from "ionic-angular";
import {GithubService} from "../../services/github.service";
import {GithubRepoComponent} from "../../components/github-repo/github-repo.component";

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [GithubService],
  directives: [GithubRepoComponent]
})
export class HomePage {
	public foundRepos;
	public username;

  constructor(private github: GithubService) { }

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
