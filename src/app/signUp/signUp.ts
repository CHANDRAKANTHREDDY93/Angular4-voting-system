import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoteService } from '../vote.service';
import { voterList } from '../voterList';
import { IsignUp } from './signupInterface';
@Component
({
	templateUrl  : './signUp.html',
	styleUrls    : ['./signUp.css']
})

export class signUpComponent
{
	voterData : any = [{voteId : '', ssn : '', name : '', phone : '', email : '', address : '', age : ''}];
	voters : voterList[];
	voteId : string;
	ssn : number;
	name : string;
	phone : number;
	email : string;
	address : string;
	age : number;

	constructor(private router: Router, private newService : VoteService)
	{
			
	}

	submit(voteId, ssn, age, name, email, phone, address)
	{
		this.voteId = voteId;
		this.ssn = ssn;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.address = address;
		this.voters = this.voterData;
		let reqObj = { voteId : this.voteId, ssn : this.ssn, name : this.name, phone : this.phone, email : this.email, address : this.address};
		this.newService.postVoterData(reqObj).subscribe(votersList =>
		{
			console.log(this.voters);
		});
	}
	close()
	{
		this.router.navigateByUrl('/home-page/home-page');
	}
	
}