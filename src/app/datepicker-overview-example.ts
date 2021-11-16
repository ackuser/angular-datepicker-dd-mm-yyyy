import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/** @title Basic datepicker */
@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html',
})
export class DatepickerOverviewExample {
  control = new FormControl('');
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
