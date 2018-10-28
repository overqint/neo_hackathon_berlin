import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableData } from '../md/md-table/md-table.component';
import { NhbService } from '../services/nhb.service';

declare var $: any;

interface FileReaderEventTarget extends EventTarget {
    result: string;
}
interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage(): string;
}

@Component({
    selector: 'service_maintanance-cmp',
    templateUrl: 'service_maintanance.component.html'
})

export class ServiceMaintananceComponent implements OnInit, AfterViewInit, OnChanges {

    constructor(private nhbService: NhbService) {}

    public tableData1: TableData;

    public serieNumberValue: string = "";

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
    }

    ngAfterViewInit() {
    }

    getAutoMetadata() {
        console.log(this.serieNumberValue);
        this.tableData1 = {
            headerRow: [ 'Auto Model', 'Engine SN', 'Mileage'],
            dataRows: [
                ['BMW i3', this.serieNumberValue, '34578 Km']
            ]
        };
        $('#data-card').show();
        $('#data-card').fadeIn();
        $('#data-card').slideDown();
    }

    submit() {
        const value = $('input[name=optionsRadios]:checked').val();
        console.log(value);
        const payload = {"manufacturer_id": value,
                        "mileage": 0};
                        /*
        this.nhbService.registerNftEngine(payload).subscribe((data: any) => {
            console.log(data);
            if(data.msg === "success") {
                $('#message-success').show();
                $('#message-success').fadeIn();
                $('#message-success').slideDown();
            }
        });
        */
    }

    public modelChange(str: string): void {
        this.serieNumberValue = str;
      }
}
