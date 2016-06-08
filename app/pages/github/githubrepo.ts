import {Component, Input} from "@angular/core";
import {InAppBrowser} from "ionic-native";
import {Repo} from "./repo";

@Component({
	selector: 'github-repo',
	template:`
	<ion-card class="repo" (click)="launch()">
		<ion-card-header>
      <div text-center>{{repo.name}} </div>
    </ion-card-header>

			<ion-item>
				<ion-row>
		    	<ion-col width-25>
				    <button dark clear item-left padding-left>
				      <ion-icon style="font-size:1.8em;" name="star"></ion-icon>
				      <div>{{repo.stargazers_count}}</div>
				    </button>
					</ion-col>
					<ion-col width-25>
				    <button dark clear item-left>
				      <ion-icon style="font-size:1.8em;" name="eye"></ion-icon>
				      <div>{{repo.watchers}}</div>
				    </button>
				  </ion-col>
				  <ion-col width-25>
				    <button dark clear item-left>
				      <ion-icon style="font-size:1.8em;" name="information-circle-outline"></ion-icon>
				      <div>{{repo.open_issues}}</div>
				    </button>
				  </ion-col>
				  <ion-col width-25>
				    <button dark clear item-left>
				      <ion-icon style="font-size:1.8em;" name="git-network"></ion-icon>
				      <div>{{repo.forks}}</div>
				    </button>
				  </ion-col>
				</ion-row>
			</ion-item>
				
  </ion-card>
	`
})

export class GitHubRepoComponent {
	@Input() repo: Repo;
	
	launch() {
		console.info("Launch: ", this.repo.html_url);
		InAppBrowser.open(this.repo.html_url, "_blank", "location=no");
  }

}