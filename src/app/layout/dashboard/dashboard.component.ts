import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DashboardService } from './../../services/dashboard.service';
import { Statistics, StatisticsList } from '../../models';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public StatisticsData: Array<StatisticsList> = [];

    constructor(public dashboardService: DashboardService) {}

    ngOnInit() {
        this.getUserList();
    }

    getUserList() {
        this.dashboardService.getAll().subscribe((result: Statistics) => {
            const { todayCases, todayDeaths, todayRecovered, cases, deaths, recovered } = result;
            this.StatisticsData.push(
                {
                    title: 'Total',
                    data: [
                        { title: 'Total Cases', count: cases },
                        { title: 'Total Deaths', count: deaths },
                        { title: 'Total Recovered', count: recovered }
                    ]
                },
                {
                    title: 'Today',
                    data: [
                        { title: 'Cases', count: todayCases },
                        { title: 'Deaths', count: todayDeaths },
                        { title: 'Recovered', count: todayRecovered }
                    ]
                }
            );
        });
    }
}
