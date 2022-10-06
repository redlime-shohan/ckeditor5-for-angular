import { Component, OnInit } from '@angular/core';
import { diff_match_patch } from "./google-diff-match-patch.js";

@Component({
  selector: 'app-rich-text-diff',
  templateUrl: './rich-text-diff.component.html',
  styleUrls: ['./rich-text-diff.component.css']
})
export class RichTextDiffComponent implements OnInit {
  dmp: any
  constructor() {
    debugger
    this.dmp = new diff_match_patch();
  }
  left: string = `Suman, 10:36 AM
  <h1>C-108 Transportation</h1><p>Aug 17, 2022&nbsp;-&nbsp;6 min read&nbsp;51 ViewsLast Update: Aug 31, 2022<a href="https://baymark.quartolab.com/null">Version History</a></p><h2><br></h2><p>DEPARTMENT: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Compliance &nbsp; &nbsp;&nbsp;</p><p><br></p><p>SUBJECT: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Free and Discounted Patient Transportation Services &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p><br></p><p>POLICY NO.: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C-108 &nbsp;</p><p><br></p><p>Effective Date: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;July 25, 2022 &nbsp;</p><p><br></p><p>Revised Date: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; July 25, 2022</p><p><br></p><p>Review Date:</p><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td valign="top" width="20.63273727647868%"><p><br></p></td><td valign="top" width="35.488308115543326%"><p><br></p></td><td valign="top" width="24.759284731774414%"><p><br></p></td><td valign="top" width="19.119669876203577%"><p><br></p></td></tr></tbody></table><p><br>&nbsp;Policy:</p><p><br></p><p>This patient transportation services policy sets forth the rules and regulations all BayMark facilities must abide by regarding the provision of free or discounted transportation services for patients to and/or from a BayMark facility. &nbsp;This policy does not cover transportation during the inpatient portion of a patient&rsquo;s treatment at our residential facilities which may include local transportation services for various program activities and/or medical services. &nbsp;This policy also does not apply to transportation services for which Baymark is reimbursed or paid to provide. All free and discounted transportation services must follow all guidelines of this policy regardless of whether a facility accepts Medicaid/Medicare or is 100% private/self-pay. &nbsp;&nbsp;</p><p><br></p><p>This policy is designed to promote greater access to medical care in BayMark facilities for those patients who lack reliable, consistent or affordable transportation. &nbsp;This policy is designed to fulfill all requirements of the Anti-Kickback Statute Safe Harbor on local transportation services, and any other State or Federal guidelines, including but not limited to the Stark Law and EKRA. &nbsp;</p><p><br></p><p><strong><u>Procedure:</u></strong></p><p><br></p><p>Transportation <strong><u>from</u></strong> the facility must also be within the facility&rsquo;s geographic service area unless the patient completed an inpatient stay (including 24-hour observation at a Hospital). &nbsp;If a patient completed an inpatient stay at a facility, there is no mile limitation for returning the patient to their place of residence. &nbsp; However, under no circumstances are facilities allowed to transport patients from one BayMark facility to another provider location except in the case of a patient&rsquo;s place of residence being a provider such as a nursing home, and the patient had previously established residence at the facility prior to receiving services. &nbsp;If a patient is homeless, or their place of residence is a homeless shelter, they may be transported to a homeless shelter.</p><p><br></p><p>In addition, the cost of providing free or discounted local transportation must be completely covered by BayMark, and cannot be charged to the patient or to the patient&rsquo;s insurance/payer, directly or indirectly, under any circumstance.</p><p><br></p><p><strong><u>Eligible Types of Transportation</u></strong></p><p><br></p><p>Eligible types of transportation include transportation that does not involve air travel, luxury travel or ambulance level transportation (staff may arrange ambulance level transportation for a patient in emergent situations, but the cost of the transportation will be the responsibility of the client). &nbsp;BayMark policy also <u>strictly prohibits</u> staff members from transporting patients in their personal vehicles. &nbsp;(Please also see APPM Policy F&amp;A-115 Operation of Company and/or Personal Vehicles.)</p><p>Examples of the types of permitted transportation include but are not necessarily limited to the following:</p><p><br></p><p><u>Shuttle Service</u>:</p><p>Shuttle Service is defined as a service that operates via a set route and on a set schedule within the geographic service area of the facility. &nbsp;Shuttle services route and schedule information may be posted but cannot be advertised in any manner beyond the posting of the shuttle service schedule.</p><p><br></p><p><u>Taxi (includes Uber/Lyft and other similar services)</u>:</p><p>Facilities can provide transportation via taxi services to an established patient of the facility as long as the Taxi/Car service is not considered luxury transportation.</p><p><br></p><p><u>Bus</u>:</p><p>Facilities may provide bus passes to patients to cover the cost of transportation to/from our facility.</p><p><br></p><p><u>Company Owned Vehicles</u></p><p>Facilities may pick up and drop off patients using company owned vehicles as long as the patients are established patients of the Facility at the time of pick up or drop off. &nbsp;</p><p><br></p><p><strong><u>Patient Eligibility for Transportation</u></strong></p><p><br></p><p>A patient receiving free or discounted transportation to/from a BayMark facility must be an &ldquo;<strong>established</strong>&rdquo; patient of the facility prior to receiving the transportation services. &nbsp;An established patient is a person who has selected and initiated contact to schedule an appointment with the facility to which they are receiving transportation, or who previously has received services at that facility. &nbsp;An established patient would be eligible to receive any type of permitted transportation detailed in the &ldquo;Eligible Types of Transportation&rdquo; section. &nbsp;</p><p><br></p><p>There is one exception to a patient receiving services who is <u>not</u> an established patient. &nbsp;BayMark facilities may provide transportation via Shuttle Services to any patient or potential patient, regardless of whether they are an established patient at the time they receive transportation via the Shuttle Services. &nbsp;However, in order for this exception to apply, the Shuttle Service must meet the definition of Shuttle Service as defined under the above &ldquo;Eligible Types of Transportation&rdquo; section. Any deviation from this strict definition would potentially invalidate this as a legal form of transportation for patients who are not &ldquo;established&rdquo; patients of the facility. &nbsp;&nbsp;</p><p><br></p><p>All patients must be receiving medically necessary items and services to receive transportation. &nbsp; Transportation for health related but non-medical care is strictly prohibited. &nbsp;</p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong><u>Marketing/Advertising Transportation</u></strong></p><p><br></p><p>Staff are strictly prohibited from publicly marketing or advertising the availability of free or discounted transportation services with the following exceptions:</p><p><br></p><ul><li>Putting the name/logo of the facility on the shuttle providing transportation.</li><li>Posting the shuttle service route and schedule.</li><li>Informing a patient that has established an appointment of the availability of available transportation.</li></ul><p><br></p><p>In addition, marketing or advertising of health care related items or services are strictly prohibited during the transportation of patients.</p>`
  right: string = `Suman, 10:36 AM
  <h1>C-109 Transportation</h1><p>10 06, 2022&nbsp;-&nbsp;6 min read&nbsp;51 ViewsLast Update: Aug 31, 2022<a href="https://baymark.quartolab.com/null">Version History</a></p><h2><br></h2><p>DEPARTMENT: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Compliance &nbsp; &nbsp;&nbsp;</p><p><br></p><p>SUBJECT: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Free and Discounted Patient Transportation Services &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p><br></p><p>POLICY NO.: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C-108 &nbsp;</p><p><br></p><p>Effective Date: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;July 25, 2022 &nbsp;</p><p><br></p><p>Revised Date: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; July 25, 2022</p><p><br></p><p>Review Date:</p><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td valign="top" width="20.63273727647868%"><p><br></p></td><td valign="top" width="35.488308115543326%"><p><br></p></td><td valign="top" width="24.759284731774414%"><p><br></p></td><td valign="top" width="19.119669876203577%"><p><br></p></td></tr></tbody></table><p><br>&nbsp;Policy:</p><p><br></p><p>This patient transportation services policy sets forth the rules and regulations must abide by regarding the provision of free or discounted transportation services for patients to and/or from a BayMark facility. &nbsp;This policy does not cover transportation during the inpatient portion of a patient&rsquo;s treatment at our residential facilities which may include local transportation services for various program activities Hello and/or medical services. &nbsp;This policy also does not apply to transportation services for which Baymark is reimbursed or paid to provide. All free and discounted transportation services must follow all guidelines of this policy regardless of whether a facility accepts Medicaid/Medicare or is 100% private/self-pay. &nbsp;&nbsp;</p><p><br></p><p>This policy is designed to promote greater access to medical care in BayMark facilities for those patients who lack reliable, consistent or affordable transportation. &nbsp;This policy is designed to fulfill all requirements of the Anti-Kickback Statute Safe Harbor on local transportation services, and any other State or Federal guidelines, including but not limited to the Stark Law and EKRA. &nbsp;</p><p><br></p><p><strong><u>Procedure:</u></strong></p><p><br></p><p>Transportation <strong><u>from</u></strong> the facility must also be within the facility&rsquo;s geographic service area unless the patient completed an inpatient stay (including 24-hour observation at a Hospital). &nbsp;If a patient completed an inpatient stay at a facility, there is no mile limitation for returning the patient to their place of residence. &nbsp; However, under no circumstances are facilities allowed to transport patients from one BayMark facility to another provider location except in the case of a patient&rsquo;s place of residence being a provider such as a nursing home, and the patient had previously established residence at the facility prior to receiving services. &nbsp;If a patient is homeless, or their place of residence is a homeless shelter, they may be transported to a homeless shelter.</p><p><br></p><p>In addition, the cost of providing free or discounted local transportation must be completely covered by BayMark, and cannot be charged to the patient or to the patient&rsquo;s insurance/payer, directly or indirectly, under any circumstance.</p><p><br></p><p><strong><u>Eligible Types of Transportation</u></strong></p><p><br></p><p>Eligible types of transportation include transportation that does not involve air travel, luxury travel or ambulance level transportation (staff may arrange ambulance level transportation for a patient in emergent situations, but the cost of the transportation will be the responsibility of the client). &nbsp;BayMark policy also <u>strictly prohibits</u> staff members from transporting patients in their personal vehicles. &nbsp;(Please also see APPM Policy F&amp;A-115 Operation of Company and/or Personal Vehicles.)</p><p>Examples of the types of permitted transportation include but are not necessarily limited to the following:</p><p><br></p><p><u>Shuttle Service</u>:</p><p>Shuttle Service is defined as a service that operates via a set route and on a set schedule within the geographic service area of the facility. &nbsp;Shuttle services route and schedule information may be posted but cannot be advertised in any manner beyond the posting of the shuttle service schedule.</p><p><br></p><p><u>Taxi (includes Uber/Lyft and other similar services)</u>:</p><p>Facilities can provide transportation via taxi services to an established patient of the facility as long as the Taxi/Car service is not considered luxury transportation.</p><p><br></p><p><u>Bus</u>:</p><p>Facilities may provide bus passes to patients to cover the cost of transportation to/from our facility.</p><p><br></p><p><u>Company Owned Vehicles</u></p><p>Facilities may pick up and drop off patients using company owned vehicles as long as the patients are established patients of the Facility at the time of pick up or drop off. &nbsp;</p><p><br></p><p><strong><u>Patient Eligibility for Transportation</u></strong></p><p><br></p><p>A patient receiving free or discounted transportation to/from a BayMark facility must be an &ldquo;<strong>established</strong>&rdquo; patient of the facility prior to receiving the transportation services. &nbsp;An established patient is a person who has selected and initiated contact to schedule an appointment with the facility to which they are receiving transportation, or who previously has received services at that facility. &nbsp;An established patient would be eligible to receive any type of permitted transportation detailed in the &ldquo;Eligible Types of Transportation&rdquo; section. &nbsp;</p><p><br></p><p>There is one exception to a patient receiving services who is <u>not</u> an established patient. &nbsp;BayMark facilities may provide transportation via Shuttle Services to any patient or potential patient, regardless of whether they are an established patient at the time they receive transportation via the Shuttle Services. &nbsp;However, in order for this exception to apply, the Shuttle Service must meet the definition of Shuttle Service as defined under the above &ldquo;Eligible Types of Transportation&rdquo; section. Any deviation from this strict definition would potentially invalidate this as a legal form of transportation for patients who are not &ldquo;established&rdquo; patients of the facility. &nbsp;&nbsp;</p><p><br></p><p>All patients must be receiving medically necessary items and services to receive transportation. &nbsp; Transportation for health related but non-medical care is strictly prohibited. &nbsp;</p><p><br></p><p><br></p><p><br></p><p><br></p><p><strong><u>Marketing/Advertising Transportation</u></strong></p><p><br></p><p>Staff are strictly prohibited from publicly marketing or advertising the availability of free or discounted transportation services with the following exceptions:</p><p><br></p><ul><li>Putting the name/logo of the facility on the shuttle providing transportation.</li><li>Posting the shuttle service route and schedule.</li><li>Informing a patient that has established an appointment of the availability of available transportation.</li></ul><p><br></p><p>In addition, marketing or advertising of health care related items or services are strictly prohibited during the transportation of patients.</p>`
  diffOutput: string = ``
  ngOnInit(): void {
    debugger
   let x =  this.left.replace(/&nbsp;/g,' ');
    console.log(x)
    this.doDiff()
    
  }


 
  tagMap: any = {'&nbsp;':''};
  unicodeRangeStart = 0xE000;
  mapLength: number = 0;




  doDiff() {
    var diffableLeft = this.convertHtmlToDiffableString(this.left);
    var diffableRight = this.convertHtmlToDiffableString(this.right);
    var diffs = this.dmp.diff_main(diffableLeft, diffableRight);
    this.dmp.diff_cleanupSemantic(diffs);
    var diffOutput = '';
    for (var x = 0; x < diffs.length; x++) {
      diffs[x][1] = this.insertTagsForOperation(diffs[x][1], diffs[x][0]);
      diffOutput += this.convertDiffableBackToHtml(diffs[x][1]);
    }
    this.diffOutput = diffOutput;//this.$sce.trustAsHtml(diffOutput);
  };


  convertHtmlToDiffableString(htmlString) {
    htmlString = htmlString.replace(/&nbsp;/g, this.tagMap['&nbsp;']);
    var diffableString = '';
    var offset = 0;
    while (offset < htmlString.length) {
      var tagStart = htmlString.indexOf('<', offset);
      if (tagStart < 0) {
        diffableString += htmlString.substr(offset);
        break;
      }
      else {
        var tagEnd = htmlString.indexOf('>', tagStart);
        if (tagEnd < 0) {
          // Invalid HTML
          // Truncate at the start of the tag
          console.log('Invalid HTML. String will be truncated.');
          diffableString += htmlString.substr(offset, tagStart - offset);
          break;
        }
        var tagString = htmlString.substr(tagStart, tagEnd + 1 - tagStart);
        // Is this tag already mapped?
        var unicodeCharacter = this.tagMap[tagString];
        if (unicodeCharacter === undefined) {
          // Nope, need to map it
          unicodeCharacter = String.fromCharCode(this.unicodeRangeStart + this.mapLength);
          this.tagMap[tagString] = unicodeCharacter;
          this.tagMap[unicodeCharacter] = tagString;
          this.mapLength++;
        }
        // At this point it has been mapped, so now we can use it
        diffableString += htmlString.substr(offset, tagStart - offset);
        diffableString += unicodeCharacter;
        offset = tagEnd + 1;
      }
    }
    return diffableString;
  };

  insertTagsForOperation(diffableString, operation) {
    // Don't insert anything if these are all tags
    var n = -1;
    do {
      n++;
    } while (diffableString.charCodeAt(n) >= this.unicodeRangeStart + 1);
    if (n >= diffableString.length) {
      return diffableString;
    }
    var openTag = '';
    var closeTag = '';
    if (operation === 1) {
      openTag = '<ins>';
      closeTag = '</ins>';
    }
    else if (operation === -1) {
      openTag = '<del>';
      closeTag = '</del>';
    }
    else {
      return diffableString;
    }
    var outputString = openTag;
    var isOpen = true;
    for (var x = 0; x < diffableString.length; x++) {
      if (diffableString.charCodeAt(x) < this.unicodeRangeStart) {
        // We just hit a regular character. If tag is not open, open it.
        if (!isOpen) {
          outputString += openTag;
          isOpen = true;
        }
        // Always add regular characters to the output
        outputString += diffableString[x];
      }
      else {
        // We just hit one of our mapped unicode characters. Close our tag.
        if (isOpen) {
          outputString += closeTag;
          isOpen = false;
        }
        // If this is a delete operation, do not add the deleted tags
        // to the output
        if (operation === -1) {
          continue;
        }
        else {
          outputString += diffableString[x];
        }
      }
    }
    if (isOpen)
      outputString += closeTag;
    return outputString;
  };

  convertDiffableBackToHtml(diffableString) {
    var htmlString = '';
    for (var x = 0; x < diffableString.length; x++) {
      var charCode = diffableString.charCodeAt(x);
      if (charCode < this.unicodeRangeStart) {
        htmlString += diffableString[x];
        continue;
      }
      var tagString = this.tagMap[diffableString[x]];
      if (tagString === undefined) {
        // We somehow have a character that is above our range but didn't map
        // Do we need to add an upper bound or change the range?
        htmlString += diffableString[x];
      }
      else {
        htmlString += tagString;
      }
    }
    return htmlString;
  };

}


