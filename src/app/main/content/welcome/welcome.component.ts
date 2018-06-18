import { Component } from '@angular/core';

import { NoctuaTranslationLoaderService } from '@noctua/services/translation-loader.service';
import { WelcomeService } from './welcome.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
  selector: 'noctua-sample',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class NoctuaWelcomeComponent {
  genes: any;
  geneForm: FormGroup;
  geneSearch: any = {};

  rows: any;
  columns = [
    { prop: 'Gene' },
    { prop: 'EnhancerID', name: 'Enhancer ID' },
    { prop: 'Coordinates', name: 'Enhancer coordinates' },
    { prop: 'Source' },
    // { prop: 'Build' },
    { prop: 'Assay' },
    { prop: 'Tissue' }
  ];

  constructor(private noctuaTranslationLoader: NoctuaTranslationLoaderService, private welcomeService: WelcomeService) {
    this.noctuaTranslationLoader.loadTranslations(english, turkish);
    // this.getGenes("A6NMD0");

    this.geneForm = new FormGroup({
      geneId: new FormControl(this.geneSearch.geneId),
    });

    // this.genes = geneData;
  }

  getGenes(uniprotId: string) {
    const self = this;
    return new Promise((resolve, reject) => {
      this.welcomeService.getGenes(uniprotId).subscribe((response: any) => {
        this.genes = response;
        var rowList = [];
        for(var x = 0; x < this.genes.length; x++){
          var row = {};
          row["Gene"] = this.genes[x]["gene"];
          row["EnhancerID"] = this.genes[x]["enhancer_ID"][0];
          row["Coordinates"] = this.genes[x]["coordinates"];
          row["Source"] = this.genes[x]["enhancer_source"][0];
          row["Build"] = this.genes[x]["enhancer_build"][0];
          row["Assay"] = this.genes[x]["assay"];
          row["Tissue"] = this.genes[x]["tissue"];
          rowList.push(row);
        }
        this.rows = rowList;
        console.log(this.genes.length);
        console.log(this.genes);
        resolve(response);
      }, reject);
    });
  }

  search() {
    // console.log(this.geneForm);
    this.getGenes(this.geneForm.value.geneId);
  };

}



let geneData = [
  {
    "Gene": "HUMAN|HGNC=2529|UniProtKB=P07339",
    "EnhancerID": 10429,
    "Coordinates": "chr11:1726957-1727350",
    "Source": "FANTOM",
    "Build": "hg19",
    "Assay": "ChIA-PET",
    "Tissue": "MCF-7"
  },
  {
    "Gene": "HUMAN|HGNC=2529|UniProtKB=P07339",
    "EnhancerID": 10438,
    "Coordinates": "chr11:1772582-1772778",
    "Source": "FANTOM",
    "Build": "hg19",
    "Assay": "ChIA-PET",
    "Tissue": "K562"
  },
  {
    "Gene": "HUMAN|HGNC=2529|UniProtKB=P07339",
    "EnhancerID": 10439,
    "Coordinates": "chr11:1773349-1773482",
    "Source": "FANTOM",
    "Build": "hg19",
    "Assay": "ChIA-PET",
    "Tissue": "K562"
  },
  {
    "Gene": "HUMAN|HGNC=2529|UniProtKB=P07339",
    "EnhancerID": 10443,
    "Coordinates": "chr11:1791889-1792111",
    "Source": "FANTOM",
    "Build": "hg19",
    "Assay": "ChIA-PET",
    "Tissue": "K562"
  },
  {
    "Gene": "HUMAN|HGNC=2529|UniProtKB=P07339",
    "EnhancerID": 10445,
    "Coordinates": "chr11:1793842-1794035",
    "Source": "FANTOM",
    "Build": "hg19",
    "Assay": "ChIA-PET",
    "Tissue": "K562"
  }
];