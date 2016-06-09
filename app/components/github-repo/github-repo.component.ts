import {Component, Input} from "@angular/core";
import {InAppBrowser} from "ionic-native";
import {GithubRepo} from "./github-repo.model";

@Component({
	selector: 'github-repo',
	template:`
	<ion-card class="github-repo" (click)="launch()">
		<ion-card-header>
      <div text-center>{{repo.name}} </div>
    </ion-card-header>

		<ion-item detail-none>
			<ion-row>
	    	<ion-col width-25>
			    <button dark clear item-left padding-left>
			      <ion-icon name="star"></ion-icon>
			      {{repo.stargazers_count}}
			    </button>
				</ion-col>
				<ion-col width-25>
			    <button dark clear item-left>
			      <ion-icon name="eye"></ion-icon>
			      {{repo.watchers}}
			    </button>
			  </ion-col>
			  <ion-col width-25>
			    <button dark clear item-left>
			      <ion-icon name="information-circle-outline"></ion-icon>
			      {{repo.open_issues}}
			    </button>
			  </ion-col>
			  <ion-col width-25>
			    <button dark clear item-left>
			      <ion-icon name="git-network"></ion-icon>
			      {{repo.forks}}
			    </button>
			  </ion-col>
			</ion-row>
		</ion-item>			
  </ion-card>
	`
})

export class GithubRepoComponent {
	@Input() repo: GithubRepo;
	
	launch() {
		console.info("Launch: ", this.repo.html_url);
		InAppBrowser.open(this.repo.html_url, "_blank", "location=no");
  }

}