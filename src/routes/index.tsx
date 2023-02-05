import "./index.css";
import {A } from "@solidjs/router";
import type { JSX, Component } from 'solid-js';
 
type IssueType =  "feature" | "rnd" | "bugs";
type IssueProps = {
  description: string;
  title: string;
  type:  IssueType;  
};
function Issue(props: IssueProps){
  const visualTag = (type: IssueType) => {
    return (
    <div class={`tag-element ${type} list` }>  {type} </div>)
  }
  return (
    <>
            <li>
              <div class="issue">
              <span> {props.title} </span>
          <small> {props.description}</small>
          <div class="tagged-list">
            {visualTag(props.type)}
            {visualTag("feature")}
              </div>
              </div>
          </li>
    </>
  );
}
function IssueList() {
  
  return (
    <>
    <h1 class="style style-head"> issues list</h1>
          <ul class="issues-list">
            <Issue description="description" title="this is my title" type="rnd" />
        </ul>
    </>
  );
}

export default function Home() {
	return (
		<div>
			<h1 class="style title"> Solid Query</h1>
			<main>
				<div class="issue-main">
					<form class="issue-search">
						<input type="text" placeholder="Search issues" />    
					</form>
          <IssueList />
				</div>
         <div class="tags">
              <ul class="tags-list">
                  <div class="tag-element feature">
                    <small> feature </small>
                    </div>
                  <div class="tag-element rnd">
                    <small> rnd </small>
                    </div>
                  <div class="tag-element bugs">
                    <small> bugs </small>
                    </div>
                </ul>
          <select class="issue-select" >
          <option value="all"> select a type</option>
          <option  value="feature">feature</option>
          <option value="rnd">rnd</option>
          <option value="bugs">bugs</option>
          </select>

         <hr/>
<A  href="/AddIssue">
          <button class="issue-button">   add issue </button> </A>
				</div>
							</main>
		</div>
	);
}
