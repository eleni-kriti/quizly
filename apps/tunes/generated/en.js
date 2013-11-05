// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">a visual programming environment</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">See generated JavaScript code.</span><span id="linkTooltip">Save and link to blocks.</span><span id="runTooltip">Run the program defined by the blocks in the workspace.</span><span id="runProgram">Run Program</span><span id="resetProgram">Reset</span><span id="dialogOk">OK</span><span id="dialogCancel">Cancel</span><span id="catLogic">Logic</span><span id="catLoops">Loops</span><span id="catMath">Math</span><span id="catText">Text</span><span id="catLists">Lists</span><span id="catColour">Colour</span><span id="catVariables">Variables</span><span id="catProcedures">Procedures</span><span id="httpRequestError">There was a problem with the request.</span><span id="linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="xmlError">Could not load your saved file.  Perhaps it was created with a different version of Blockly?</span><span id="listVariable">list</span><span id="textVariable">text</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof tunepage == 'undefined') { var tunepage = {}; }


tunepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Tune_dialogRedo">Play the puzzle tune again</span><span id="Tune_playNote">play note</span><span id="Tune_playC">play note C</span><span id="Tune_playD">play note D</span><span id="Tune_playE">play note E</span><span id="Tune_playF">play note F</span><span id="Tune_playG">play note G</span><span id="Tune_playA">play note A</span><span id="Tune_playB">play note B</span><span id="Tune_playCHigh">play note high C</span><span id="Tune_setInterval">set interval</span><span id="Tune_ifInterval">if interval equals</span><span id="Tune_doCode">do</span><span id="Tune_elseCode">else</span><span id="Tune_helpIfElse">If-else blocks will do one thing or the other.</span><span id="Tune_repeatTimes">repeat times</span><span id="Tune_setIntervalTooltip">set the interval between notes</span><span id="Tune_playNoteTooltip">play the note from the dropdown menu</span><span id="Tune_playCTooltip">play the desigated note</span><span id="Tune_playDTooltip">play the desigated note</span><span id="Tune_playETooltip">play the desigated note</span><span id="Tune_playFTooltip">play the desigated note</span><span id="Tune_playGTooltip">play the desigated note</span><span id="Tune_playATooltip">play the desigated note</span><span id="Tune_playBTooltip">play the desigated note</span><span id="Tune_playCHighTooltip">play</span><span id="Tune_ifTooltip">If something is true, then do some actions.</span><span id="Tune_ifelseTooltip">If the interval is as specified, then do the first block of actions.  Otherwise, do the second block of actions.</span><span id="Tune_whileTooltip">Repeat the enclosed actions until the tune is completed.</span><span id="Tune_repeatTimesTooltip">Repeat the enclosed actions the designated number of times.</span><span id="Tune_packageTooltip">Package the workspace as an app.</span><span id="Tune_runTooltip">Play the blocks in the workspace.</span><span id="Tune_resetTooltip">Reset the puzzle.</span><span id="Tune_capacity0">You have %0 blocks left.</span><span id="Tune_capacity1">You have %1 block left.</span><span id="Tune_capacity2">You have %2 blocks left.</span><span id="Tune_nextLevel">Congratulations! Are you ready to proceed to level %1?</span><span id="Tune_regrets">Awww! That doesn\'t sound right. Try again!</span><span id="Tune_finalLevel">Congratulations! You have solved the final level.</span></div>';
};


tunepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = tunepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Play That Tune</a> : Level</span> &nbsp; ';
  for (var i218 = 1; i218 < 10; i218++) {
    output += ' ' + ((i218 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i218) + '</span>' : (i218 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i218) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i218) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i218) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i218) + '</a>');
  }
  output += '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=10&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">Create</a></h1></td><td class="farSide"><select id="languageMenu"></select> &nbsp; <button style="display:none; position:relative" id="packageButton" class="package" title="Packages the workspace into an Android app."><img src="../../media/1x1.gif" class="stop icon21"> Package</button></td></tr></table><div id="visualization" ><img style="position:relative" src = "./media/screenshot-400.png"><img id="noteC" style="position:absolute; left:22px; top:525px; display:none" src = "./media/reddot-40.png"><img id="noteD" style="position:absolute; left:67px; top:525px; display:none" src = "./media/reddot-40.png"><img id="noteE" style="position:absolute; left:115px; top:525px; display:none" src = "./media/reddot-40.png"><img id="noteF" style="position:absolute; left:160px; top:525px; display:none" src = "./media/reddot-40.png"><img id="noteG" style="position:absolute; left:205px; top:525px; display:none" src = "./media/reddot-40.png"><img id="noteA" style="position:absolute; left:252px; top:525px; display:none" src = "./media/reddot-40.png"><img id="noteB" style="position:absolute; left:297px; top:525px; display:none" src = "./media/reddot-40.png"><img id="noteCHigh" style="position:absolute; left:342px; top:525px; display:none" src = "./media/reddot-40.png"><button style="border:1px solid #ff0000; position:absolute; left:0px; top:55px; width:390px; height:300px" id="runButton" class="primary" title="Plays the tune specified in the blocks."><img src="../../media/1x1.gif" class="run icon21"> Play that tune</button><button style="border:1px solid #ff0000; display:none; position:absolute; left:0px; top:55px; width:390px; height:300px" id="resetButton" class="primary" title="Reset the puzzle tune to its start state."><img src="../../media/1x1.gif" class="stop icon21"> Reset</button><div id="capacityBubble"><div id="capacity"></div></div></div><!--  <script type="text/javascript" src="../../blockly_uncompressed.js"><\/script>  --><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="tune-blocks.js"><\/script><!--  <script type="text/javascript" src="../../blockly-all.js"><\/script> --><script type="text/javascript" src="../../blockly-all-uncompressed.js"><\/script><script type="text/javascript" src="../../blockly-toolbox.js"><\/script><script type="text/javascript" src="../../javascript.js"><\/script><script type="text/javascript" src="tune-javascript.js"><\/script>' + tunepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><svg version="1.1" height="1px" width="1px"><text id="arrowTest" style="font-family: sans-serif; font-size: 11pt;">⟲⟳</text></svg><div id="pegmanMenu"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData) + '<div id="dialogDone" class="dialogHiddenContent"><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><img src="../../media/1x1.gif" id="pegSpin"><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"></div></div><div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="help.png"></td><td>&nbsp;</td><td>To code that tune stack a couple of \'play note\' blocks together inside the \'when PlayButton clicked\' block.</td><td valign="top"><img src="help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="help.png"></td><td>&nbsp;</td><td>Make sure all the blocks in the workspace are connected together.<iframe id="iframeOneTopBlock" src=""></iframe></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Click the \'Play that tune\' button to run your code to hear and see what happens.</td><td rowspan=2><img src="help.png"></td></tr><tr><td><div><img src="help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div><div id="dialogIntroduceThePuzzle" class="dialogHiddenContent"><div id="dialogIntroduceText" style="font-size: large; margin: 1em;"></div><img src="../../media/1x1.gif" id="pegSpin"><table><tr><td>Listen and watch: can you code this tune?.</td><td rowspan=2><img src="help.png"></td></tr><tr><td><div><img src="help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table><div id="dialogIntroduceButtons" class="farSide" style="padding: 1ex 3ex 0"></div></div><div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Your program didn\'t play the correct tune.  Press \'Reset\' and try again.</td><td rowspan=2><img src="help.png"></td></tr><tr><td><div><img src="help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div><div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="help_up.png"></td><td>Code the tune using only two blocks.  Use \'repeat\' to play a sequence of blocks more than once.</td><td><img src="help.png"></td></tr></table></div><div id="dialogHelpGenericNote" class="dialogHiddenContent"><table><tr><td><img src="help_up.png"></td><td>Look! All note blocks are combined into a single \'play note\' block with a drop down menu to select a specific note.</td><td><img src="help.png"></td></tr></table></div><div id="dialogHelpNestedRepeat" class="dialogHiddenContent"><table><tr><td><img src="help_up.png"></td><td>To code this tune, you\'ll have to put repeat blocks inside of another repeat block.</td><td><img src="help.png"></td></tr></table></div><div id="dialogHelpInterval" class="dialogHiddenContent"><table><tr><td><img src="help_up.png"></td><td>To vary the speed of the notes you can use this block to set the interval between notes to \'short\', \'medium\', or \'long\'. By default the interval is \'medium\'.</td><td><img src="help.png"></td></tr></table></div><div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="help.png"></td><td>&nbsp;</td><td>You have used up all the blocks for this level.  To create a new block, you first need to delete an existing block.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="help_up.png"></td><td>You can fit more than one block inside a \'repeat\' block.</td><td><img src="help.png"></td></tr></table></div><div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="help.png"></td><td>Choose your favourite player from this menu.</td><td><img src="help_up.png"></td></tr></table></div><div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="help_up.png"></td><td>An \'if\' block will do something only if the interval between notes is short (or medium or long).  Try playing some notes fast and some slow during during a loop.</td><td><img src="help.png"></td></tr></table></div><div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="help_up.png"></td><td id="helpMenuText">Click on %1 in the \'if\' block to change its condition.</td><td><img src="help.png"></td></tr></table></div><div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="help_up.png"></td><td>An if-else block will do one thing or the other depending on whether the interval selected in the dropdown equals the current interval between notes. Try using it to alternate between different sets of notes in a loop. You\'ll have to change the interval during the loop.</td><td><img src="help.png"></td></tr></table></div><div id="dialogLastLevel" class="dialogHiddenContent"><table><tr><td><img src="help.png"></td><td>&nbsp;</td><td>Great job! You\'ve finished all the puzzles. Now try coding your own tune. When you\'re done you can package it as an app for your Android device.' + apps.ok(null, null, opt_ijData) + '</td></tr></table></div><div id="qrcode"><tt id="qrcodetext" style="font-size:7px"></tt></div>';
  return output;
};


tunepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;">' + ((opt_ijData.level <= 5) ? '<block type="tune_play_c"></block><block type="tune_play_d"></block><block type="tune_play_e"></block><block type="tune_play_f"></block><block type="tune_play_g"></block><block type="tune_play_a"></block><block type="tune_play_b"></block><block type="tune_play_c_high"></block>' : '') + ((opt_ijData.level > 2 && opt_ijData.level <= 5) ? '<block type="tune_times"></block>' : '') + ((opt_ijData.level > 5) ? '<block type="tune_play_note"></block><block type="tune_times"></block>' : '') + ((opt_ijData.level > 7) ? '<block type="set_interval"></block>' : '') + ((opt_ijData.level > 8) ? '<block type="tune_ifElse"></block>' : '') + '</xml>';
};


tunepage.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return tunepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div>';
};
