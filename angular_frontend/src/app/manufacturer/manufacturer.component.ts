import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
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
    selector: 'manufacturer-cmp',
    templateUrl: 'manufacturer.component.html'
})

export class ManufacturerComponent implements OnInit, AfterViewInit, OnChanges {
    constructor(private nhbService: NhbService) {}

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
    }

    ngAfterViewInit() {
    }

    submit() {
        const value = $('input[name=optionsRadios]:checked').val();
        console.log(value);
        const payload = {"manufacturer_id": value,
                        "mileage": 0};
        this.nhbService.registerNftEngine(payload).subscribe((data: any) => {
            console.log(data);
            if(data.msg === "success") {
                $('#message-success').show();
                $('#message-success').fadeIn();
                $('#message-success').slideDown();
            }
        });
    }
}
