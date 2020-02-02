import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'employee-management';
  categories: any = [];
  cources: any = [];
  myMap = new Map();
  name: String = "Categories"
  forwardIcon: String = "   >"
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get("assets/data.json").subscribe(data => {
      console.log("nikkkkkkkkkkkkkkkkkkkkkkkkk" + data);
      this.categories = data;
      this.populateMap()
      this.cources = Array.from(this.myMap.keys());
      console.log(this.cources)
    })
  }
  private getSubCource(cource: String): void {
    debugger;
    if (!cource) {
      this.cources = Array.from(this.myMap.keys());
      this.name = "Categories"
      this.forwardIcon = "    >"
    }
    if (this.checkSubcat(cource)) {
      this.name = "<  " + cource
      let cat: String
      this.cources = []
      this.myMap.get(cource).forEach((val, key) => {
        cat = ""
        val = val.join('/')
        cat = key + ":<br>" + val
        this.cources.push(cat);
      });
      this.forwardIcon = ""
    }
  }
  checkSubcat(cource: String): boolean {
    if (this.myMap.get(cource)) {
      return true
    } else {
      return false;
    }
  }
  populateMap() {
    //this will generate the data in below format:
    // 0: {"Cloud Computing" => Map(2)}
    // key: "Cloud Computing"
    // value: Map(2)
    // [[Entries]]
    // 0: {"Popular" => Array(2)}
    // key: "Popular"
    // value: (2) ["AWS Solutions Architect Certification Training", "AWS Cloud Migration Training Course"]
    // 1: {"Master" => Array(1)}
    // key: "Master"
    // value: ["AWS and Azure Certification Training"]
    this.categories.map((element: { stream: any; name: any; category: any; }) => {
      if (this.myMap.get(element.stream)) {
        if (element.name) {
          if (this.myMap.get(element.stream).get(element.category)) {
            this.myMap.get(element.stream).get(element.category).push(element.name)
          } else {
            let tempArr = []
            tempArr.push(element.name)
            this.myMap.get(element.stream).set(element.category, tempArr)
          }
        }
      } else {
        let tempMap = new Map()
        let tempArr = []
        if (element.name) {
          tempArr.push(element.name)
          tempMap.set(element.category, tempArr)
          this.myMap.set(element.stream, tempMap)
        } else {
          this.myMap.set(element.stream, "")
        }
      }
    });
    debugger;
  }









  private _opened: boolean = false;
  private _modeNum: number = 0;
  private _positionNum: number = 0;
  private _dock: boolean = false;
  private _closeOnClickOutside: boolean = false;
  private _closeOnClickBackdrop: boolean = false;
  private _showBackdrop: boolean = false;
  private _animate: boolean = true;
  private _trapFocus: boolean = true;
  private _autoFocus: boolean = true;
  private _keyClose: boolean = false;
  private _autoCollapseHeight: number = null;
  private _autoCollapseWidth: number = null;

  private _MODES: Array<string> = ['over', 'push', 'slide'];
  private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  private _toggleOpened(): void {
    this._opened = !this._opened;
    this.cources = Array.from(this.myMap.keys());
  }

  private _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

  private _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

  private _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
  }

  private _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

  private _toggleDock(): void {
    this._dock = !this._dock;
  }

  private _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

  private _toggleCloseOnClickBackdrop(): void {
    this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

  private _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

  private _toggleAnimate(): void {
    this._animate = !this._animate;
  }

  private _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

  private _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

  private _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

  private _onOpenStart(): void {
    console.info('Sidebar opening');
  }

  private _onOpened(): void {
    console.info('Sidebar opened');
  }

  private _onCloseStart(): void {
    console.info('Sidebar closing');
  }

  private _onClosed(): void {
    console.info('Sidebar closed');
  }

  private _onTransitionEnd(): void {
    console.info('Transition ended');
  }

  private _onBackdropClicked(): void {
    console.info('Backdrop clicked');
  }
}
