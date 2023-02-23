import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: any;
  constructor(
    private userDataService:UserDataService
  ) { }

  ngOnInit(): void {
    this.experience = this.userDataService.experience;
  }

  isLinkpresent(): boolean {
    if (this.experience.siteLink != null) {
      return false
    }
    return true
  }
}
