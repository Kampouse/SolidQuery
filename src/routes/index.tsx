import "./index.css";

export default function Home() {
	return (
		<div>
			<h1 class="style title"> Solid Query</h1>
			<main>
				<div class="issue-main">
					<form class="issue-search">
						<input type="text" placeholder="Search issues" />    
					</form>
					<h1 class="style style-head"> issues list</h1>
          <ul class="issues-list">
            <li>
              <div class="issue">
              <span> issue  title </span>
              <small> issue description </small>
              </div>
          </li>
          <li>
              <div class="issue">
              <span> issue  title </span>
              <small> issue description </small>
              </div>
          </li>
        </ul>
				</div>
         <div class="tags">
					<h1 class="style">labels</h1>
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
                 

				</div>

							</main>
		</div>
	);
}