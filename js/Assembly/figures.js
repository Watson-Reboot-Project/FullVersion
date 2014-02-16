/*******************************************************************************
 * A function that creates a new figure based upon the specified number
 * 
 * @param figNum
 *            The figure that you wish to create.
 ******************************************************************************/
var Figure = function(figNum) {
	this.figNum = figNum;
	
	this.figCode;
	if (this.figNum == 113) {
		this.figCode = "<table id='program113' class='spanTable'>\
		<tr>\
		<td></td>\
		<td></td>\
		<td>TOTAL</td>\
		<td class='keyword'>.BLOCK</td>\
		<td class='constant'>1</td>\
		<td></td>\
		<td></td>\
		<td>;</td>\
		<td class='comment'>reserve a block of memory one word long for 'total'.</td>\
	</tr>\
	<tr>\
		<td></td>\
		<td></td>\
		<td>ABC</td>\
		<td class='keyword'>.WORD</td>\
		<td class='constant'>2</td>\
		<td></td>\
		<td></td>\
		<td>;</td>\
		<td class='comment'>reserve a word of memory for variable 'abc'. Initialize to 2.</td>\
	</tr>\
	<tr>\
		<td></td>\
		<td></td>\
		<td>XYZ</td>\
		<td class='keyword'>.WORD</td>\
		<td class='constant'>3</td>\
		<td></td>\
		<td></td>\
		<td>;</td>\
		<td class='comment'>reserve a word of memory for variable 'xyz'. Initialize to 3.</td>\
	</tr>\
	<tr>\
		<td></td>\
		<td></td>\
		<td></td>\
		<td class='command'>LOAD</td>\
		<td>REGD,</td>\
		<td>ABC</td>\
		<td></td>\
		<td>;</td>\
		<td class='comment'>load the value of variable 'abc' into register D.</td>\
	</tr>\
	<tr>\
		<td></td>\
		<td></td>\
		<td></td>\
		<td class='command'>LOAD</td>\
		<td>REGE,</td>\
		<td>XYZ</td>\
		<td></td>\
		<td>;</td>\
		<td class='comment'>load the value of variable 'xyz' into register E.</td>\
	</tr>\
	<tr>\
		<td></td>\
		<td></td>\
		<td></td>\
		<td class='command'>ADD</td>\
		<td>REGF,</td>\
		<td>REGD,</td>\
		<td>REGE</td>\
		<td>;</td>\
		<td class='comment'>add the contents of registers D and E placing the result in F.</td>\
	</tr>\
	<tr>\
		<td></td>\
		<td></td>\
		<td></td>\
		<td class='command'>STORE</td>\
		<td>REGF,</td>\
		<td>TOTAL</td>\
		<td></td>\
		<td>;</td>\
		<td class='comment'>store the value held in register F into the variable 'total'.</td>\
	</tr>\
	<tr>\
		<td></td>\
		<td></td>\
		<td></td>\
		<td class='command'>HALT</td>\
		<td></td>\
		<td></td>\
		<td></td>\
		<td>;</td>\
		<td class='comment'>halt execution of this assembly language program.</td>\
	</tr>\
</table>";
	} else if (this.figNum == 114) {
		this.figCode = "<table id='program114' class='spanTable'>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>X</td>\
						<td class='keyword'>.WORD</td>\
						<td class='constant'>15</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>reserve a word of memory for variable 'x'. Initialize to 15.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOAD</td>\
						<td>REGA,</td>\
						<td>X</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>load the value of variable 'x' into register A.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REGB,</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>load the constant value 1 into register B.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>SUBTRACT</td>\
						<td>REG0,</td>\
						<td>REGA,</td>\
						<td>REGB</td>\
						<td>;</td>\
						<td class='comment'>subtract the contents of register B from A placing result in 0.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>STORE</td>\
						<td>REG0,</td>\
						<td>X</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>store the value held in register 0 into the variable 'x'.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>HALT</td>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>halt execution of this assembly language program.</td>\
					</tr>\
				</table>";
	} else if (this.figNum == 115) {
		this.figCode = "<table id='program115' class='spanTable'>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>AGE</td>\
						<td class='keyword'>.WORD</td>\
						<td class='constant'>2</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>declare and initialize 'age' to 2. Our subject is 2 years old.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>MINOR</td>\
						<td class='keyword'>.BLOCK</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>declare 'minor'.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REG0,</td>\
						<td class='constant'>0</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>load the constant value 0 into register 0.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>STORE</td>\
						<td>REG0,</td>\
						<td>MINOR</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>store a zero into 'minor', i.e., minor is assumed 'false'.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>IF</td>\
						<td class='command'>LOAD</td>\
						<td>REGA,</td>\
						<td>AGE</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>load the value of variable 'age' into register A.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REGB,</td>\
						<td class='constant'>18</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>load the constant value 18 into register B.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>COMPARE</td>\
						<td>REGA,</td>\
						<td>REGB</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>compare registers A & B &#45; i.e., the value of 'age' to 18.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>BRANCH</td>\
						<td>LT,</td>\
						<td>THEN</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>IF 'age' is less than 18 branch to 'then'.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>JUMP</td>\
						<td>ENDIF</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>otherwise jump to the end of the if block &#45; 'endif'</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>THEN</td>\
						<td class='command'>LOADIMM</td>\
						<td>REG1,</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>THEN: load the constant value 1 into register 1.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>STORE</td>\
						<td>REG1,</td>\
						<td>MINOR</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>store a one into 'minor' &#45; i.e., minor is 'true'.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>ENDIF</td>\
						<td class='command'>HALT</td>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>halt execution of this assembly language program.</td>\
					</tr>\
				</table>";
	} else if (this.figNum == 116) {
		this.figCode = "<table id='program116' class='spanTable'>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>MINORS</td>\
						<td class='keyword'>.WORD</td>\
						<td class='constant'>0</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>declare and initialize the number of 'minors' to 0.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>ADULTS</td>\
						<td class='keyword'>.WORD</td>\
						<td class='constant'>0</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>declare and initialize the number of 'adults' to 0.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>AGE</td>\
						<td class='keyword'>.WORD</td>\
						<td class='constant'>21</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>declare and initialize the 'age' of the person to 21.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>IF</td>\
						<td class='command'>LOAD</td>\
						<td>REGA,</td>\
						<td>AGE</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>load the value of variable 'age' into register A.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REGB,</td>\
						<td class='constant'>18</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>load the constant value 18 into register B.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>COMPARE</td>\
						<td>REGA,</td>\
						<td>REGB</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>compare registers A & B &#45; i.e., the value of 'age' to 18</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>BRANCH</td>\
						<td>LT,</td>\
						<td>THEN</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>IF 'age' is less than 18 branch to 'then'.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>JUMP</td>\
						<td>ELSE</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>otherwise jump to 'else'.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>THEN</td>\
						<td class='command'>LOAD</td>\
						<td>REG0,</td>\
						<td>MINORS</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>THEN: load the number of minors into register 0.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REG1,</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>load the constant value 1 into register 1.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>ADD</td>\
						<td>REG0,</td>\
						<td>REG0,</td>\
						<td>REG1</td>\
						<td>;</td>\
						<td class='comment'>add contents of register 1 to register 0.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>STORE</td>\
						<td>REG0,</td>\
						<td>MINORS</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>update number of minors from register 0.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>JUMP</td>\
						<td>ENDIF</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>go to the statement labelled 'endif'.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>ELSE</td>\
						<td class='command'>LOAD</td>\
						<td>REG0,</td>\
						<td>ADULTS</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>ELSE: load the number of adults into register 0.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REG1,</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>load the constant value 1 into register 1</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>ADD</td>\
						<td>REG0,</td>\
						<td>REG0,</td>\
						<td>REG1</td>\
						<td>;</td>\
						<td class='comment'>add contents of register 1 to register 0.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>STORE</td>\
						<td>REG0,</td>\
						<td>ADULTS</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>update number of adults from register 0.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>ENDIF</td>\
						<td class='command'>HALT</td>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>halt execution of this assembly language program.</td>\
					</tr>\
				</table>";
	} else if (this.figNum == 119) {
		this.figCode ="<table id='program119' class='spanTable'>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>X</td>\
						<td class='keyword'>.WORD</td>\
						<td class='constant'>5</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>declare and initialize 'x' to 5 &#47;&#42; first operand &#42;&#47;</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>Y</td>\
						<td class='keyword'>.WORD</td>\
						<td class='constant'>4</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>declare and initialize 'y' to 4 &#47;&#42; second operand &#42;&#47;</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>Z</td>\
						<td class='keyword'>.BLOCK</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>declare 'z' &#47;&#42; z will hold the product of the operands &#42;&#47;</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>I</td>\
						<td class='keyword'>.BLOCK</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>declare 'i' &#47;&#42; i counts the number of loop iterations &#42;&#47;</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REGA,</td>\
						<td class='constant'>0</td>\
						<td></td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>STORE</td>\
						<td>REGA,</td>\
						<td>Z</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>z = 0;</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REGA,</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>STORE</td>\
						<td>REGA,</td>\
						<td>I</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>i = 1;</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>LOOP</td>\
						<td class='command'>LOAD</td>\
						<td>REGA,</td>\
						<td>I</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>while(i<=y)</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOAD</td>\
						<td>REGB,</td>\
						<td>Y</td>\
						<td></td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>COMPARE</td>\
						<td>REGA,</td>\
						<td>REGB</td>\
						<td></td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>BRANCH</td>\
						<td>GT,</td>\
						<td>ENDLP</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>{</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOAD</td>\
						<td>REGA,</td>\
						<td>Z</td>\
						<td></td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOAD</td>\
						<td>REGB,</td>\
						<td>X</td>\
						<td></td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>ADD</td>\
						<td>REGC,</td>\
						<td>REGA,</td>\
						<td>REGB</td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>STORE</td>\
						<td>REGC,</td>\
						<td>Z</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>z = z + x;</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOAD</td>\
						<td>REGA,</td>\
						<td>I</td>\
						<td></td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REGB,</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>ADD</td>\
						<td>REGC,</td>\
						<td>REGA,</td>\
						<td>REGB</td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>STORE</td>\
						<td>REGC,</td>\
						<td>I</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>i = i + 1;</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>JUMP</td>\
						<td>LOOP</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>}</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>ENDLP</td>\
						<td class='command'>HALT</td>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td></td>\
					</tr>\
				</table>";
	} else if (this.figNum == 1110) {
		this.figCode = "<table id='program1110' class='spanTable'>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>X</td>\
						<td class='keyword'>.WORD</td>\
						<td class='constant'>5</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>declare and initialize 'x' to 5 /* first operand */</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>Y</td>\
						<td class='keyword'>.WORD</td>\
						<td class='constant'>4</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>declare and initialize 'y' to 4 /* second operand */</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>Z</td>\
						<td class='keyword'>.BLOCK</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>declare 'z' /* z will hold the product of the operands */</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>I</td>\
						<td class='keyword'>.BLOCK</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>declare 'i' /* i counts the number of loop iterations */</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REG1,</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>register 1 holds the constant value 1.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOAD</td>\
						<td>REGA,</td>\
						<td>X</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>register A holds the value of variable 'x'.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOAD</td>\
						<td>REGB,</td>\
						<td>Y</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>register B holds the value of variable 'y'.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REGC,</td>\
						<td class='constant'>0</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>register C holds the value of variable 'z' &#45; initially 0.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REGD,</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>register D holds the value of variable 'i' &#45; initially 1.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>LOOP</td>\
						<td class='command'>COMPARE</td>\
						<td>REGD,</td>\
						<td>REGB</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>compare register D (the counter 'i') to register B ('y').</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>BRANCH</td>\
						<td>GT,</td>\
						<td>ENDLP</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>if 'i' is greater than 'y' then branch to 'endlp'.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>ADD</td>\
						<td>REGC,</td>\
						<td>REGC,</td>\
						<td>REGA</td>\
						<td>;</td>\
						<td class='comment'>otherwise, add the value of 'x' to 'z'.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>ADD</td>\
						<td>REGD,</td>\
						<td>REGD,</td>\
						<td>REG1</td>\
						<td>;</td>\
						<td class='comment'>add 1 to the counter 'i'.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>JUMP</td>\
						<td>LOOP</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>return to the top of the loop.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>ENDLP</td>\
						<td class='command'>STORE</td>\
						<td>REGD,</td>\
						<td>I</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>copy results back to main memory variables.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>STORE</td>\
						<td>REGC,</td>\
						<td>Z</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>the product of 'x' and 'y' is saved in variable 'z'.</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>HALT</td>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>halt execution of this assembly language program.</td>\
					</tr>\
				</table>";
	} else if (this.figNum == 1111) {
		this.figCode = "<table id='program1111' class='spanTable'>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>I</td>\
						<td class='keyword'>.BLOCK</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>var i; // Numeric</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>A</td>\
						<td class='keyword'>.BLOCK</td>\
						<td class='constant'>30</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>var a = new array(30); // Numeric</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REGA,</td>\
						<td class='constant'>0</td>\
						<td></td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>STORE</td>\
						<td>REGA,</td>\
						<td>I</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>i = 0;</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>LOOP</td>\
						<td class='command'>LOAD</td>\
						<td>REGA,</td>\
						<td>I</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>while (i < 30)</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REGB,</td>\
						<td class='constant'>30</td>\
						<td></td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>COMPARE</td>\
						<td>REGA,</td>\
						<td>REGB</td>\
						<td></td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>BRANCH</td>\
						<td>GE,</td>\
						<td>ENDLP</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>{</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REGA,</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>Register A assigned the base address of array a</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOAD</td>\
						<td>REGB,</td>\
						<td>I</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>Register B assigned the value of subscript i</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>ADD</td>\
						<td>REGC,</td>\
						<td>REGA,</td>\
						<td>REGB</td>\
						<td>;</td>\
						<td class='comment'>Register C assigned the address of a[i]</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REGD,</td>\
						<td class='constant'>-1</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>Register D assigned the constant -1</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>STOREIND</td>\
						<td>REGD,</td>\
						<td>REGC</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>a[i] = -1;</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOAD</td>\
						<td>REGA,</td>\
						<td>I</td>\
						<td></td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>LOADIMM</td>\
						<td>REGB,</td>\
						<td class='constant'>1</td>\
						<td></td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>ADD</td>\
						<td>REGC,</td>\
						<td>REGA,</td>\
						<td>REGB</td>\
						<td>;</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>STORE</td>\
						<td>REGC,</td>\
						<td>I</td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>i = i + 1;</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td class='command'>JUMP</td>\
						<td>LOOP</td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td class='comment'>}</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>ENDLP</td>\
						<td class='command'>HALT</td>\
						<td></td>\
						<td></td>\
						<td></td>\
						<td>;</td>\
						<td></td>\
					</tr>\
				</table>";
	}

	this.htmlString = "<div ng-controller='assemblycontroller"+this.figNum+"' class='container' id='fig"+this.figNum+"'>\
		<div class='row'>\
\
			<div class='col-lg-12 col-md-12' id='table' id='fig"+this.figNum+"'>"+this.figCode+"\
			</div>\
			<br>\
			<div class='row'>\
			<div class='text-center'>\
				<div class='btn-group-horizontal'>\
					<button type='button' ng-class='buttonColor(runtext.name)' style='width:10%'\
						ng-repeat='runtext in runText' ng-click='runButton()'>{{runtext.name}}</button>\
					<button type='button' ng-class='buttonColor(walktext.name)' style='width:10%'\
						ng-repeat='walktext in walkText' ng-click='walkButton()'>{{walktext.name}}</button>\
				</div>\
				</div>\
			</div>\
			<br>\
			<!-- begining of the tabs -->\
			<tabset class='col-lg-9'> <!-- demo tab - shows all of the information for the current lab -->\
			<tab heading='Figure'> <br>\
			<div class='container'>\
				<div class='row'>\
					<div\
						class='col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-1 col-xs-2 col-xs-offset-1'>\
						<div id='table' style='width: 90px'>\
							<table id='variables"+this.figNum+"' class='table table-bordered'>\
								<thead>\
									<tr>\
										<th colspan='2' class='text-center'>Memory</th>\
									</tr>\
								</thead>\
								<tbody ng-repeat='mem in varMemory'>\
									<tr>\
										<th>{{mem.title}}</th>\
										<td>{{mem.value}}</td>\
									</tr>\
								</tbody>\
							</table>\
						</div>\
					</div>\
					<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2'>\
						<div id='table' style='width: 90px'>\
							<table id='variables' class='table table-bordered'>\
								<thead>\
									<tr>\
										<th colspan='2' class='text-center'>Register</th>\
									</tr>\
								</thead>\
								<tbody ng-repeat='reg in varRegister'>\
									<tr>\
										<th>{{reg.title}}</th>\
										<td>{{reg.value}}</td>\
									</tr>\
								</tbody>\
							</table>\
						</div>\
					</div>\
				</div>\
			</div>\
			</tab> <!-- editor tab where you can make changes to the code --> <tab\
				heading='Editor' disabled='true'> <br>\
			<div class='container'>\
				<div class='row'>\
					<div class='col-lg-4 col-lg-offset-2 col-md-4 col-md-offset-2'>\
\
						<!-- table that shows the code -->\
						<div id='table'\
							style='overflow-y: scroll; border: 1px solid black; height: 200px; width: 350px'>\
							<table id='commands"+this.figNum+"'>\
							</table>\
						</div>\
					</div>\
\
					<!-- button group for the table and code -->\
					<div class='col-lg-4 col-md-4'>\
						<div id='editor_button_group'\
							class='col-lg-4 col-md-4 btn-group-vertical'>\
							<button type='button' class='btn btn-default'\
								onclick='insertWord()'>Word</button>\
							<button type='button' class='btn btn-default'\
								onclick='insertBlock()'>Block</button>\
							<button type='button' class='btn btn-default'\
								onClick='insertLoad()'>Load</button>\
							<button type='button' class='btn btn-default'\
								onclick='insertStore()'>Store</button>\
							<button type='button' class='btn btn-default'\
								onclick='insertAdd()'>Add</button>\
							<button type='button' class='btn btn-default'\
								onclick='insertBranch()'>Branch</button>\
						</div>\
						<div id='editor_button_group'\
							class='col-lg-4 col-md-4 btn-group-vertical'>\
							<button type='button' class='btn btn-default'\
								onclick='insertJump()'>Jump</button>\
							<button type='button' class='btn btn-default'\
								onclick='insertLoadImm()'>Load Imm</button>\
							<button type='button' class='btn btn-default'\
								onclick='insertAnd()'>And</button>\
							<button type='button' class='btn btn-default'\
								onclick='insertLoadIn()'>Load In</button>\
							<button type='button' class='btn btn-default'\
								onclick='insertStoreIn()'>Store In</button>\
							<button type='button' class='btn btn-default'\
								onclick='insertSub()'>Subtract</button>\
						</div>\
						<div id='editor_button_group'\
							class='col-lg-4 col-md-4 btn-group-vertical'>\
							<button type='button' class='btn btn-default'\
								onclick='insertOr()'>Or</button>\
							<button type='button' class='btn btn-default'\
								onclick='insertCompare()'>Compare</button>\
							<button type='button' class='btn btn-default'\
								onclick='insertASL()'>ASL</button>\
							<button type='button' class='btn btn-default'\
								onclick='insertASR()'>ASR</button>\
							<button type='button' class='btn btn-default'\
								onclick='insertHalt()'>Halt</button>\
							<button type='button' class='btn btn-default'\
								onclick='insertNot()'>Not</button>\
						</div>\
					</div>\
				</div>\
			</div>\
\
			</tab> <!-- tab containing the memory, register, program counters, and flags -->\
			<tab heading='Architecture'> <br>\
			<div class='container' style='width: 1049px;'>\
				<div class='row'>\
					<div\
						class='col-lg-3 col-md-3 col-sm-3 col-xs-3 panel panel-default'\
						style='width: 220px; border: 1px solid;'>\
						<h4 style='text-align:center'>Memory</h4>\
						<div class='spanMem'>\
							<table class='table table-bordered' ng-repeat='mem in memory'\
								style='table-layout: fixed;'>\
								<tr ng-style='set_color(mem.memno)'>\
									<th style='text-align:right'>{{mem.memno}}</th>\
									<td style='text-align:center'>{{mem.con1}}</td>\
									<td style='text-align:center'>{{mem.con2}}</td>\
									<td style='text-align:center'>{{mem.con3}}</td>\
									<td style='text-align:center'>{{mem.con4}}</td>\
								</tr>\
							</table>\
\
						</div>\
					</div>\
					<div\
						class='col-lg-1 col-md-1 col-sm-1 col-xs-1 panel panel-default'\
						style='height: 35px; width: 10%; border: 1px solid; margin-top: 15%'>Data Bus</div>\
					<div class='col-lg-6 col-md-6'style='border: 1px solid'>\
					<h3 style='text-align:center'>CPU</h3>\
						<div class='panel panel-default' style='width: 500px;'>\
							<!-- table containing the register information -->\
							<div class='col-lg-4  col-md-3 col-sm-2 col-xs-2'>\
								<h4>Registers</h4>\
								<!-- I should be outside of this box -->\
								<div class='spanReg'>\
									<table class='table table-bordered'\
										style='table-layout: fixed;' ng-repeat='reg in register'>\
										<tbody>\
											<tr>\
												<th style='text-align:center'>{{reg.content}}</th>\
												<td class='text-center'>{{reg.value}}</td>\
											</tr>\
										</tbody>\
									</table>\
								</div>\
							</div>\
							<!-- program counter and instruction register table -->\
							<div\
								class='col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-1 col-xs-2 col-xs-offset-1'>\
								<table class='table table-bordered'\
									style='height: 100px; width: 170px; margin-top: 22%'>\
									<tbody>\
										<tr>\
											<th class='text-center' colspan='4'>Program Counter</th>\
										</tr>\
										<tr>\
											<td class='text-center' colspan='4'\
												ng-repeat='cnt in counter'>{{cnt.content}}</td>\
										</tr>\
										<tr>\
											<th class='text-center' colspan='4'>Instruction Register</th>\
										</tr>\
										<tr ng-repeat='inst in instructionRegister'\
											class='text-center'>\
											<td>{{inst.con1}}</td>\
											<td>{{inst.con2}}</td>\
											<td>{{inst.con3}}</td>\
											<td>{{inst.con4}}</td>\
										<tr>\
									</tbody>\
								</table>\
								<!-- flag table -->\
								<div class='row'>\
									<div class='col-lg-2 col-md-2' style='margin-top:22%'>\
										<table class='table table-bordered'\
											style='height: 150px; width: 170px;'>\
											<thead>\
												<tr>\
													<th colspan='2' class='text-center'>Flags</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<td class='text-center' ng-repeat='carry in carryFlag'>{{carry.flag}}</td>\
													<td>Carry</td>\
												</tr>\
												<tr>\
													<td class='text-center' ng-repeat='neg in negativeFlag'>{{neg.flag}}</td>\
													<td>Negative</td>\
												</tr>\
												<tr>\
													<td class='text-center' ng-repeat='zero in zeroFlag'>{{zero.flag}}</td>\
													<td>Zero</td>\
												</tr>\
												<tr>\
													<td class='text-center' ng-repeat='over in overflowFlag'>{{over.flag}}</td>\
													<td>Overflow</td>\
												</tr>\
											</tbody>\
										</table>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>\
			</div>\
			</tab></tabset>\
			<br>\
		</div>\
	</div>";
	var divName = document.getElementById("fig" + this.figNum + "Div");
	divName.innerHTML = this.htmlString;
	var assemblyName = 'assembly' + this.figNum;
	console.log(assemblyName);
	var assemblycontroller = 'assemblycontroller' + this.figNum;
	console.log(assemblycontroller);
	var tabsstuff = angular
	.module(assemblyName, [ 'ui.bootstrap' ])

	.provider(
			'assembler',
			function() {

				var assembler = function(tableName, varTable, figureMode) {
					this.tableName = tableName;

					var parser = this;
					this.intervalID;
					// Determines if in Figure or Architecture mode
					// True for Figure, False if Architecture
					this.figureMode = figureMode;

					// Has the table been edited recently?
					// Set to true by default
					this.edited = true;

					// A flag indicating whether the program has been run
					// before
					// Primarily used for checking if values should be reset
					this.done = false;

					// Initial program counter
					// Increased when .Block and .Word is used/modified
					this.programCounter = 0;

					this.previousCounter = 0;

					this.offSet = 0;

					// Current program counter
					// Kept constant
					this.startCounter = this.programCounter;

					// Flag for Overflow
					// Set whenever a register goes over 32767
					this.overflowFlag = 0;

					// Flag for Negative
					// Set whenever a register has stored a negative value
					this.negativeFlag = 0;

					// Flag for Carry
					// Set when ???
					this.carryFlag = 0;

					// Flag for Zero
					// Set whenever a register holds a zero value
					this.zeroFlag = 0;

					// Alerts the controller that the program has finished
					this.stop = false;

					// List of used variables
					// More important in figure mode
					// index1 = label
					// index2 = value
					// index3 = memoryLocation
					this.varMemory = [];

					this.varRegister = [];

					// List of memory labels
					// Helps with memory lookup
					this.labels = [];

					// For ease of adjustment later
					// References to Column # of each attribute
					this.labelNum = 2;
					this.cmdNum = 3;
					this.arg1Num = 4;
					this.arg2Num = 5;
					this.arg3Num = 6;

					// Information Storage for Registers
					// Also gives flag about if Registers are used
					// Initial firstChild.nodeValues set to 0 and false
					this.register = [ [ "REG0", 0, false, "REG0," ], // Reg0
					                  [ "REG1", 0, false, "REG1," ], // Reg1
					                  [ "REG2", 0, false, "REG2," ], // Reg2
					                  [ "REG3", 0, false, "REG3," ], // Reg3
					                  [ "REG4", 0, false, "REG4," ], // Reg4
					                  [ "REG5", 0, false, "REG5," ], // Reg5
					                  [ "REG6", 0, false, "REG6," ], // Reg6
					                  [ "REG7", 0, false, "REG7," ], // Reg7
					                  [ "REG8", 0, false, "REG8," ], // Reg8
					                  [ "REG9", 0, false, "REG9," ], // Reg9
					                  [ "REGA", 0, false, "REGA," ], // RegA
					                  [ "REGB", 0, false, "REGB," ], // RegB
					                  [ "REGC", 0, false, "REGC," ], // RegC
					                  [ "REGD", 0, false, "REGD," ], // RegD
					                  [ "REGE", 0, false, "REGE," ], // RegE
					                  [ "REGF", 0, false, "REGF," ] // RegF
									];

					// Memory storage
					// Initially zero before starting
					this.memory = new Array(256);
					for (var i = 0; i < 256; i++) {
						this.memory[i] = [ "0", "0", "0", "0" ];
					}

					// Stores initial values for memory
					// Used in resetting the program
					this.initMemory = [];

					// Stores initial values for variables
					// Used in resetting the program
					this.initVarMemory = [];
					this.initVarRegister = [];

					// Converts a number to a hexidecimal with defined
					// padding
					this.decimalToHex = function(d, padding) {
						var hex = Number(d).toString(16);
						padding = typeof (padding) === "undefined"
								|| padding === null ? padding = 2 : padding;

						if (d >= 0) {
							while (hex.length < padding) {
								hex = "0" + hex;
							}

							return hex.toUpperCase();
						}

						var finalVal = parseInt(hex, 16);
						//console.log("FinalVal is " + finalVal);
						if (finalVal < 0) {
							finalVal = 0xFFFF + finalVal + 1;
						}

						return finalVal.toString(16).toUpperCase();
					};

					this.hexToDecimal = function(hex, size) {
						var isNegative = hex[0] == "8" || hex[0] == "9"
								|| hex[0] == "A" || hex[0] == "B"
								|| hex[0] == "C" || hex[0] == "D"
								|| hex[0] == "E" || hex[0] == "F";
						var finalVal = hex;
						if (isNegative) {
							finalVal = ~finalVal;

							finalVal = parseInt(finalVal, 16);
						} else {
							finalVal = parseInt(finalVal, 16);
						}
						return finalVal;
					};

					this.isNumber = function(n) {
						return !isNaN(parseFloat(n)) && isFinite(n);
					};

					// Performs the size checking of a register at index to
					// ensure 16bit functionality
					// If overflow occurs, handles accordingly
					this.checkRegister = function(index) {
						var regValue = this.register[index][1];
						if (regValue > 32768) {
							this.overflow = 1;
							var hex = this.decimalToHex(
									this.register[index][1], 4);
							var length = hex.length;
							var value = "";
							for (var i = 8; i >= 1; i--) {
								value = value + hex[length - i];
							}
							this.register[index][1] = this.hexToDecimal(
									value, 4);
						}
						if (regValue < -32768) {
							var hex = this.decimalToHex(
									this.register[index][1], 4);
							var length = hex.length;
							var value = "";
							for (var i = 8; i >= 1; i--) {
								value = value + hex[length - i];
							}
							this.register[index][1] = this.hexToDecimal(
									value, 4);
						}
					};

					// Clears the values of the registers
					this.clearRegister = function() {
						for (var i = 0; i < 16; i++) {
							this.register[i][1] = 0;
						}
					};

					// Goes through and checks through the table for changes
					// as well as which variables are in use.
					// Initializes the Registers and Variable arrays if
					// needed.
					// If on figure tab, also populates Variable Table.
					this.init = function() {
						var table = document.getElementById(this.tableName);
						// "Compile"
						var progLine = 0;
						var memLine = 0;
						var refLine = 0;
						var index = 0;

						// Populate the labels array for memory lookup
						while (progLine < table.rows.length) {
							if (table.rows[progLine].cells[this.labelNum].firstChild != null
									&& table.rows[progLine].cells[this.labelNum].firstChild.nodeValue != null) {
								var ref = table.rows[progLine].cells[this.labelNum].firstChild.nodeValue;
								this.labels[refLine++] = [ ref, progLine + this.offSet ];
								if (table.rows[progLine].cells[this.cmdNum].firstChild.nodeValue == ".BLOCK") {
									this.offSet += parseInt(table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue,10) - 1;
								}
							}
							progLine++;
						}

						this.previousCounter = this.offSet;

						// Begin "assembling" into Machine code in
						// this.memory
						progLine = 0;
						while (progLine < table.rows.length) {
							switch (table.rows[progLine].cells[this.cmdNum].firstChild.nodeValue) {
							case ".WORD": // .Word before program
								// Store firstChild.nodeValue based on
								// argument
								var arg1 = table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue;

								var hex = parseInt(arg1, 10);
								// hex length checking goes here.
								hex = this.decimalToHex(hex, 4);
								// Store in memory and update program
								// counter
								this.memory[memLine] = [ hex[0], hex[1], hex[2], hex[3] ];
								this.initMemory[memLine] = [ hex[0], hex[1], hex[2], hex[3] ];
								this.programCounter++;
								this.startCounter = this.programCounter;
								// Store variable for display
								this.varMemory[index] = [table.rows[progLine].cells[this.labelNum].firstChild.nodeValue, arg1, memLine++ ];
								this.initVarMemory[index] = [ this.varMemory[index][0], this.varMemory[index][1], this.varMemory[index++][2] ];
								break;

							case ".BLOCK": // .Block before program
								// Reserve number of rows indicated by argument
								var arg1 = table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue;
								for (var i = 0; i < arg1; i++) {
									this.memory[memLine] = [ '0', '0', '0', '0' ];
									this.initMemory[memLine] = [ '0', '0', '0', '0' ];
									this.programCounter++;
									this.startCounter = this.programCounter;
									// Store in Variable Array
									var name = table.rows[progLine].cells[this.labelNum].firstChild.nodeValue;
									if(arg1 > 1){
										name = name +'['+i+']';
									}
									this.varMemory[index] = [name,  0, memLine++];
									this.initVarMemory[index] = [this.varMemory[index][0],this.varMemory[index][1],this.varMemory[index++][2]];
								}
								break;

							case "LOADIMM": // 0000b LoadImm
								// Find and flag specified register
								var arg1, arg2;
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue) {
										arg1 = i;
										this.register[i][2] = true;
										break;
									}
								}
								// Get value to be stored in Register
								arg2 = table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue;
								var hex = parseInt(arg2, 10);
								// hex length checking goes here.
								hex = this.decimalToHex(hex, 2);
								// Store in memory
								this.memory[memLine++] = [ 0, arg1, hex[0],
										hex[1] ];
								break;

							case "LOAD": // 0001b Load
								// Find and flag specified register
								var arg1, arg2, label;
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue) {
										arg1 = i;
										this.register[i][2] = true;
										break;
									}
								}
								// Find correct memory location via label
								label = table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue;
								for (var i = 0; i < this.labels.length; i++) {
									if (this.labels[i][0] === label) {
										arg2 = this.labels[i][1];
										i += this.labels.length;
									}
								}
								// Break memory up into hex location
								var hex = parseInt(arg2, 10);
								hex = this.decimalToHex(hex, 2);
								// Store in memory and update program
								// counter
								this.memory[memLine++] = [ 1, arg1, hex[0],
										hex[1] ];
								break;

							case "STORE": // 0010b Store
								// Find and flag specified register
								var arg1, arg2, label;
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue) {
										arg1 = i;
										this.register[i][2] = true;
										break;
									}
								}
								// Find correct memory location via label
								label = table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue;
								for (var i = 0; i < this.labels.length; i++) {
									if (this.labels[i][0] === label) {
										arg2 = this.labels[i][1];
										i += this.labels.length;
									}
								}
								// Convert decimal memory location to hex
								var hex = parseInt(arg2, 10);
								hex = this.decimalToHex(hex, 2);
								// Store in memory and update program
								// counter
								this.memory[memLine++] = [ 2, arg1, hex[0],
										hex[1] ];
								break;

							case "LOADIND": // 0011b LoadInd
								var arg1, arg2;
								// Find and flag specified Registers
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue) {
										arg1 = i;
										this.register[i][2] = true;
										break;
									}
								}
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue) {
										arg2 = i;
										this.register[i][2] = true;
										break;
									}
								}
								// Store in memory
								this.memory[memLine++] = [ 3, arg1, arg2, 0 ];
								break;

							case "STOREIND": // 0100b StoreInd
								var arg1, arg2;
								// Find and flag specified registers
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue) {
										arg1 = i;
										this.register[i][2] = true;
										break;
									}
								}
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue) {
										arg2 = i;
										this.register[i][2] = true;
										break;
									}
								}
								// Store in memory
								this.memory[memLine++] = [ 4, arg1, arg2, 0 ];
								break;

							case "ADD": // 0101b Add
								var arg1, arg2, arg3;
								// Find and flag the specified registers
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue) {
										arg1 = i;
										this.register[i][2] = true;
										break;
									}
								}
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue) {
										arg2 = i;
										this.register[i][2] = true;
										break;
									}
								}
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue) {
										arg3 = i;
										this.register[i][2] = true;
										break;
									}
								}
								// Store in memory
								this.memory[memLine++] = [ 5, arg1, arg2,
										arg3 ];
								break;

							case "SUBTRACT": // 0110b Subtract
								var arg1, arg2, arg3;
								// Find and flag specified registers
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue) {
										arg1 = i;
										this.register[i][2] = true;
										break;
									}
								}
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue) {
										arg2 = i;
										this.register[i][2] = true;
										break;
									}
								}
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue) {
										arg3 = i;
										this.register[i][2] = true;
										break;
									}
								}
								// Store in memory
								this.memory[memLine++] = [ 6, arg1, arg2,
										arg3 ];
								break;

							case "AND": // 0111b And
								var arg1, arg2, arg3;
								// Find and flag specified registers
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue) {
										arg1 = i;
										this.register[i][2] = true;
										break;
									}
								}
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue) {
										arg2 = i;
										this.register[i][2] = true;
										break;
									}
								}
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue) {
										arg3 = i;
										this.register[i][2] = true;
										break;
									}
								}
								// Store in memory
								this.memory[memLine++] = [ 7, arg1, arg2,
										arg3 ];
								break;

							case "OR": // 1000b Or
								var arg1, arg2, arg3;
								// find and flag specified registers
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue) {
										arg1 = i;
										this.register[i][2] = true;
										break;
									}
								}
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue) {
										arg2 = i;
										this.register[i][2] = true;
										break;
									}
								}
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue) {
										arg3 = i;
										this.register[i][2] = true;
										break;
									}
								}
								// Store in memory
								this.memory[memLine++] = [ 8, arg1, arg2,
										arg3 ];
								break;

							case "NOT": // 1001b Not
								var arg1, arg2;
								// Find and flag specified registers
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue) {
										arg1 = i;
										this.register[i][2] = true;
										break;
									}
								}
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue) {
										arg2 = i;
										this.register[i][2] = true;
										break;
									}
								}
								// Store in memory
								this.memory[memLine++] = [ 9, arg1, arg2, 0 ];
								break;

							case "ASL": // 1010b ASL
								var arg1, arg2, arg3;
								// Find and flag specified registers
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue) {
										arg1 = i;
										this.register[i][2] = true;
										break;
									}
								}
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue) {
										arg2 = i;
										this.register[i][2] = true;
										break;
									}
								}
								// Grab # of bits to shift
								arg3 = table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue;
								// Store in memory
								this.memory[memLine++] = [ 10, arg1, arg2,
										arg3 ];
								break;

							case "ASR": // 1011b ASR
								var arg1, arg2, arg3;
								// Find and flag specified registers
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue) {
										arg1 = i;
										this.register[i][2] = true;
										break;
									}
								}
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue) {
										arg2 = i;
										this.register[i][2] = true;
										break;
									}
								}
								// Grab # of bits to shift
								arg3 = table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue;
								// Store in memory
								this.memory[memLine++] = [ 11, arg1, arg2,
										arg3 ];
								break;

							case "COMPARE": // 1100b Compare
								var arg1, arg2, arg3;
								arg1 = 0;
								// Find and flag specified registers
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue) {
										arg2 = i;
										this.register[i][2] = true;
										break;
									}
								}
								for (var i = 0; i < 16; i++) {
									if (this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue
											|| this.register[i][3] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue) {
										arg3 = i;
										this.register[i][2] = true;
										break;
									}
								}
								// Store in memory
								this.memory[memLine++] = [ 12, arg1, arg2,
										arg3 ];
								break;

							case "BRANCH": // 1101b Branch
								var arg1, arg2, label;
								// Determine boolean test
								switch (table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue) {
								case 'EQ,':
									arg1 = 0;
									break;
								case 'NE,':
									arg1 = 1;
									break;
								case 'LT,':
									arg1 = 2;
									break;
								case 'LE,':
									arg1 = 3;
									break;
								case 'GT,':
									arg1 = 4;
									break;
								case 'GE,':
									arg1 = 5;
									break;
								case 'CARRY,':
									arg1 = 6;
									break;
								case 'NEG,':
									arg1 = 7;
									break;
								case 'ZERO,':
									arg1 = 8;
									break;
								case 'OVER,':
									arg1 = 9;
									break;
								}
								// Find memory location to jump to
								label = table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue;
								for (var i = 0; i < this.labels.length; i++) {
									if (this.labels[i][0] === label) {
										arg2 = this.labels[i][1];
										i += this.labels.length;
									}
								}
								// Convert to hex to store in memory
								var hex = parseInt(arg2, 10);
								// hex length checking goes here.
								hex = this.decimalToHex(hex, 2);
								// Store in memory
								this.memory[memLine++] = [ 13, arg1,
										hex[0], hex[1] ];
								break;

							case "JUMP": // 1110b Jump
								var arg1, arg2, label;
								arg1 = 0;
								// Find memory location to jump to
								label = table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue;
								for (var i = 0; i < this.labels.length; i++) {
									if (this.labels[i][0] == label) {
										arg2 = this.labels[i][1];
										i += this.labels.length;
									}
								}
								// convert to hex to store in memory
								var hex = parseInt(arg2, 10);
								// console.log(hex);
								// hex length checking goes here.
								hex = this.decimalToHex(hex, 2);
								// Store in memory
								this.memory[memLine++] = [ 14, arg1,
										hex[0], hex[1] ];
								break;

							case "HALT": // 1111b Halt
								this.memory[memLine++] = [ 15, 0, 0, 0 ];
								break;
							}
							progLine++;
						}
						// Iterate over registers to see which ones are used
						// Create cells in variable array for these
						// registers
						var varRegIndex = 0;
						for (var i = 0; i < 16; i++) {
							if (this.register[i][2]) {
								this.varRegister[varRegIndex] = [
										this.register[i][0], 0 ];
								this.initVarRegister[varRegIndex] = [
										this.varRegister[varRegIndex][0],
										this.varRegister[varRegIndex++][1] ];
							}
						}
						// Signal that program has been parsed
						this.edited = false;
					};

					// Add two registers and store in the first
					// Logically: Reg1 = Reg2 + Reg3
					this.add = function(reg1, reg2, reg3) {
						this.register[reg1][1] = this.register[reg2][1]
								+ this.register[reg3][1];
						// Value/Flag checking
						this.checkRegister(reg1);
						if (this.register[reg1][1] === 0) {
							this.zeroFlag = 1;
						} else {
							this.zeroFlag = 0;
						}
						if (this.register[reg1][1] >= -1) {
							this.negativeFlag = 1;
						} else {
							this.negativeFlag = 1;
						}
						// Update value in Variable array
						for (var i = 0; i < this.varRegister.length; i++) {
							if (this.varRegister[i][0] == this.register[reg1][0]) {
								this.varRegister[i][1] = this.register[reg1][1];
								break;
							}
						}
						// Debugging/Demo code
						// console.log("Add " + this.register[reg2][0] + "
						// and " + this.register[reg3][0]);
						// console.log(this.register[reg1][0]+ "= "
						// +this.register[reg1][1]);
					};

					// Subtract two registers and store in the first
					// Logically: Reg1 = Reg2 - Reg3
					this.sub = function(reg1, reg2, reg3) {
						this.register[reg1][1] = this.register[reg2][1]
								- this.register[reg3][1];
						// Value/Flag checking
						this.checkRegister(reg1);
						if (this.register[reg1][1] === 0) {
							this.zeroFlag = 1;
						} else {
							this.zeroFlag = 0;
						}
						if (this.register[reg1][1] <= -1) {
							this.negativeFlag = 1;
						} else {
							this.negativeFlag = 0;
						}

						// Update value in Variable array
						for (var i = 0; i < this.varRegister.length; i++) {
							if (this.varRegister[i][0] == this.register[reg1][0]) {
								this.varRegister[i][1] = this.register[reg1][1];
							}
						}
						// Debugging/Demo code
						// console.log("Subtract " + this.register[reg2][0]
						// + " and " + this.register[reg3][0]);
						// console.log(this.register[reg1][0]+ "= "
						// +this.register[reg1][1]);
					};

					// Store the data in reg into memory at location pointed
					// to by value1 and value2
					// value1 and value2 are in hex
					this.store = function(reg, value1, value2) {
						// Convert data from register into hex
						var hex = this.decimalToHex(this.register[reg][1], 4);
						// Store register data in hex in memory
						this.memory[parseInt(value1 + value2, 16)] = [ hex[0], hex[1], hex[2], hex[3] ];
						// Update value in Variable array
						var x = parseInt(value1 + value2, 16);
						for (var i = 0; i < this.varMemory.length; i++) {
							// Find variable by memory location
							if (this.varMemory[i][2] == x) {
								this.varMemory[i][1] = this.register[reg][1];
							}
							
						}
						// Debug/Demo code
						// console.log("Store " + this.register[reg][0] + "
						// in Memory");
						// console.log("Memory @" +x+ " = " +
						// this.memory[x]);
					};

					// Performs Binary And on two registers and stores into
					// the first
					// Logically: Reg1 = Reg2 AND Reg3
					this.and = function(reg1, reg2, reg3) {
						this.register[reg1][1] = this.register[reg2][1]
								& this.register[reg3][1];
						this.checkRegister(reg1);
						// Update Variable array
						for (var i = 0; i < this.varRegister.length; i++) {
							if (this.varRegister[i][0] == this.register[reg1][0]) {
								this.varRegister[i][1] = this.register[reg1][1];
							}
						}
					};

					// Performs Binary Or on two registers and stores into
					// the first
					// Logically: Reg1 = Reg2 OR Reg3
					this.or = function(reg1, reg2, reg3) {
						this.register[reg1][1] = this.register[reg2][1]
								| this.register[reg3][1];
						this.checkRegister(reg1);
						// Update the Variable array
						for (var i = 0; i < this.varRegister.length; i++) {
							if (this.varRegister[i][0] == this.register[reg1][0]) {
								this.varRegister[i][1] = this.register[reg1][1];
							}
						}
					};

					// Performs Binary Not on a register and stores it into
					// another
					// Logically: Reg1 = NOT Reg2
					this.not = function(reg1, reg2) {
						this.register[reg1][1] = ~this.register[reg2][1];
						this.checkRegister(reg1);
						// Update the Variable array
						for (var i = 0; i < this.varRegister.length; i++) {
							if (this.varRegister[i][0] == this.register[reg1][0]) {
								this.varRegister[i][1] = this.register[reg1][1];
							}
						}
					};

					// Performs the Arithmetic Shift Left on the given
					// register by #bits
					// Logically: Reg1 = ASL Reg2 #Bits
					this.asl = function(reg1, reg2, bits) {
						// Parse number of bits (in hex)
						var tBits = parseInt(bits, 16);
						this.register[reg1][1] = this.register[reg2][1] << tBits;
						this.checkRegister(reg1);
						// Update the variable array
						for (var i = 0; i < 16; i++) {
							if (this.varRegister[i][0] == this.register[reg1][0]) {
								this.varRegister[i][1] = this.register[reg1][1];
							}
						}
					};

					// Performs the Arithmetic Shift Right on the given
					// register by #bits
					// Logically: Reg1 = ASR Reg2 #Bits
					this.asr = function(reg1, reg2, bits) {
						// Parse number of bits (in hex)
						var tBits = parseInt(bits, 16);
						this.register[reg1][1] = this.register[reg2][1] >>> tBits;
						this.checkRegister(reg1);
						// Update the variable array
						for (var i = 0; i < this.varRegister.length; i++) {
							if (this.varRegister[i][0] == this.register[reg1][0]) {
								this.varRegister[i][1] = this.register[reg1][1];

							}
						}
					};

					// Store a value in memory pointed at by another
					// register
					this.storeInd = function(reg1, reg2) {
						//console.log(this.decimalToHex(this.register[reg1][1], 4));
						var hex = this.decimalToHex(this.register[reg1][1], 4);
						this.memory[this.register[reg2][1]] = [hex[0], hex[1], hex[2], hex[3]]; 
						// Updating of the Variable array
						var x = parseInt(this.register[reg2][1], 10);
						for (var i = 0; i < this.varMemory.length; i++) {
							// Find memory name via location
							if (this.varMemory[i][2] === x) {
								this.varMemory[i][1] = this.register[reg1][1];
								break;
							}
						}
						// Debug Code
						// console.log("STOREIND "+ this.register[reg2][1]+" = "+this.register[reg1][1]);
						// console.log("VarMemory :"+this.varMemory[i][2]);
					};

					// Load value stored in memory into register
					// mem1 and mem2 are in hex
					this.load = function(reg, mem1, mem2) {
						// Get value from memory
						var num = this.memory[parseInt(mem1 + mem2, 16)];
						// Store value into register
						this.register[reg][1] = parseInt(num[0] + num[1]
								+ num[2] + num[3], 16);
						// Update Variable array
						for (var i = 0; i < this.varRegister.length; i++) {
							if (this.varRegister[i][0] == this.register[reg][0]) {
								this.varRegister[i][1] = this.register[reg][1];
							}
						}
						// Debug/Demo Code
						// console.log("Load " + this.register[reg][0]);
						// console.log(this.register[reg][0]+ "= " +this.register[reg][1]);
					};

					// Load a given value into a register
					// value1 and value2 are in hex
					this.loadImm = function(reg, value1, value2) {
						// Parse and store value into register
						var x = "" + value1 + value2;
						this.register[reg][1] = this.hexToDecimal(x, 2);
						// Update Variable array
						for (var i = 0; i < this.varRegister.length; i++) {
							if (this.varRegister[i][0] == this.register[reg][0]) {
								this.varRegister[i][1] = this.register[reg][1];
							}
						}
						// Debug/Demo code
						// console.log("LoadImm " + this.register[reg][0]);
						// console.log(this.register[reg][0]+ "= "
						// +this.register[reg][1]);
					};

					// Load into a register the value in memory pointed to
					// by another register
					this.loadInd = function(reg1, reg2) {
						// Reference and store value
						this.register[reg1][1] = this.memory[this.register[reg2][1]];
						// Update Variable Array
						for (var i = 0; i < this.varRegister.length; i++) {
							if (this.varRegister[i][0] == this.register[reg][0]) {
								this.varRegister[i][1] = this.register[reg][1];
							}
						}
					};

					// Compares two registers and sets flags accordingly
					this.compare = function(reg1, reg2) {
						var number = this.register[reg1][1]
								- this.register[reg2][1];

						if (number < 0) {
							this.negativeFlag = 1;
						} else {
							this.negativeFlag = 0;
						}
						if (number == 0) {
							this.zeroFlag = 1;
						} else {
							this.zeroFlag = 0;
						}
						// console.log("Compare "+this.register[reg1][0]+"
						// and "+this.register[reg2][0]);
					};

					// Observes flags set by Compare and adjusts program
					// counter accordingly
					this.branch = function(cond, addr1, addr2) {
						// console.log("Branch "+cond);
						// console.log("Neg "+this.negativeFlag);
						// console.log("Zero "+this.zeroFlag);
						if (cond == "0") {
							// EQ
							if (this.zeroFlag == 1) {
								this.jump(addr1, addr2);
								return;
							}
						} else if (cond == "1") {
							// NE
							if (this.zeroFlag == 0) {
								this.jump(addr1, addr2);
								return;
							}
						} else if (cond == "2") {
							// LT
							if (this.negativeFlag == 1) {
								this.jump(addr1, addr2);
								return;
							}
						} else if (cond == "3") {
							// LE
							if (this.zeroFlag == 1
									|| this.negativeFlag == 1) {
								this.jump(addr1, addr2);
								return;
							}
						} else if (cond == "4") {
							// GT
							if (this.zeroFlag == 0
									&& this.negativeFlag == 0) {
								this.jump(addr1, addr2);
								return;
							}
						} else if (cond == "5") {
							// GE
							if (this.negativeFlag == 0) {
								this.jump(addr1, addr2);
								return;
							}
						} else if (cond == "6") {
							// CARY
							if (this.carryFlag == 1) {
								this.jump(addr1, addr2);
								return;
							}
						} else if (cond == "7") {
							// Neg
							if (this.negativeFlag == 1) {
								this.jump(addr1, addr2);
								return;
							}
						} else if (cond == "8") {
							// Zero
							if (this.zeroFlag == 1) {
								this.jump(addr1, addr2);
								return;
							}
						} else if (cond == "9") {
							// over
							if (this.overflowFlag == 1) {
								this.jump(addr1, addr2);
								return;
							}
						}
						this.programCounter++;

					};

					// Sets program counter to be equal to the given memory
					// address
					this.jump = function(addr1, addr2) {
						this.programCounter = parseInt(addr1 + addr2, 16);
						// console.log("Jump "+addr1+addr2);
					};

					// Sets the stop flag to true.
					// Essentially tells the program to stop.
					// Also resets the program counter.
					this.halt = function() {
						// clearInterval(this.intervalID);
						this.stop = true;
						this.done = true;
						// console.log("Halt!");
					};

					// Evaluates the command at the given line.
					// Essentially the core interpreter of the program
					// Changes RegN values into index numbers
					this.eval = function(line) {
						switch (this.memory[line][0]) {
						case 0: // 0000b LoadImm
							this.loadImm(this.memory[line][1],
									this.memory[line][2],
									this.memory[line][3]);
							this.programCounter++;
							break;
						case 1: // 0001b Load
							this.load(this.memory[line][1],
									this.memory[line][2],
									this.memory[line][3]);
							this.programCounter++;
							break;
						case 2: // 0010b Store
							this.store(this.memory[line][1],
									this.memory[line][2],
									this.memory[line][3]);
							this.programCounter++;
							break;
						case 3: // 0011b LoadInd
							this.loadInd(this.memory[line][1],
									this.memory[line][2]);
							this.programCounter++;
							break;
						case 4: // 0100b StoreInd
							this.storeInd(this.memory[line][1],
									this.memory[line][2]);
							this.programCounter++;
							break;
						case 5: // 0101b Add
							this.add(this.memory[line][1],
									this.memory[line][2],
									this.memory[line][3]);
							this.programCounter++;
							break;
						case 6: // 0110b Subtract
							this.sub(this.memory[line][1],
									this.memory[line][2],
									this.memory[line][3]);
							this.programCounter++;
							break;
						case 7: // 0111b And
							this.and(this.memory[line][1],
									this.memory[line][2],
									this.memory[line][3]);
							this.programCounter++;
							break;
						case 8: // 1000b Or
							this.or(this.memory[line][1],
									this.memory[line][2],
									this.memory[line][3]);
							this.programCounter++;
							break;
						case 9: // 1001b Not
							this.not(this.memory[line][1],
									this.memory[line][2],
									this.memory[line][3]);
							this.programCounter++;
							break;
						case 10: // 1010b ASL
							this.asl(this.memeory[line][1],
									this.memory[line][2],
									this.memory[line][3]);
							this.programCounter++;
							break;
						case 11: // 1011b ASR
							this.asr(this.memory[line][1],
									this.memory[line][2],
									this.memory[line][3]);
							this.programCounter++;
							break;
						case 12: // 1100b Compare
							this.compare(this.memory[line][2],
									this.memory[line][3]);
							this.programCounter++;
							break;
						case 13: // 1101b Branch
							this.branch(this.memory[line][1],
									this.memory[line][2],
									this.memory[line][3]);
							break;
						case 14: // 1110b Jump
							this.jump(this.memory[line][2],
									this.memory[line][3]);
							break;
						case 15: // 1111b Halt
							this.halt();
							break;
						}
					};

					// Walks through one step of the program
					this.walk = function() {
						var table = document.getElementById(this.tableName);
						var numCells = table.rows[this.programCounter
								- this.offSet].cells.length;
						if (this.edited) {
							this.init();
							this.previousCounter = this.programCounter;
						}
						if (this.done) {
							this.reset();
							// console.log("Would you like to go again?");
							this.done = false;
						}
						if (!this.stop) {

							for (var i = 0; i < 7; i++) { // iterate
															// throughout
															// the cells
								// for (var i = 0; i < numCells; i++) {
								var index = this.previousCounter
										- this.offSet;
								// console.log("Program Counter
								// "+this.programCounter);
								// console.log("Previous Counter
								// "+this.previousCounter);
								// console.log("OffSet: "+this.offSet);
								// console.log("Row "+index+", Cell "+i);
								if (table.rows[index].cells[i].firstChild != null) {
									var temp = parseInt(
											table.rows[index].cells[i].firstChild.nodeValue,
											10);
									if (!(isNaN(temp))) {
										table.rows[index].cells[i].style.color = '#A52A2A';
									} else if (table.rows[index].cells[i].firstChild.nodeValue == '.BLOCK'
											|| table.rows[index].cells[i].firstChild.nodeValue == '.WORD') {
										table.rows[index].cells[i].style.color = '#CC0099';
									} else if (i == 3) {
										table.rows[index].cells[i].style.color = '#0000FF';
									} else {
										table.rows[index].cells[i].style.color = '#000000';
									}

								}
								// }
							} // grab the number of cells for this row
							for (var i = 7; i < 9; i++) {
								table.rows[this.previousCounter
										- this.offSet].cells[i].style.color = '#007500';
							}
							this.previousCounter = this.programCounter;
							for (var i = 0; i < numCells; i++) { // iterate
																	// throughout
																	// the
																	// cells
								table.rows[this.programCounter
										- this.offSet].cells[i].style.color = '#FF0000'; // highlight
																							// all
																							// cells
																							// red
							}
							parser.eval(this.programCounter);

						} else {
							// console.log("Inner Walk stop is true");
						}

					};

					// Runs through the program
					// First checks if the code has recently been edited.
					this.run = function() {
						if (this.edited) {
							this.init();
						}
						if (this.done) {
							this.reset();
						}
					};

					// Pauses execution of program
					this.pause = function() {
						// legacy function
					};

					// Resets the program counter and restores program to
					// original state
					this.reset = function() {
						this.programCounter = this.startCounter;
						// Need to reset Memory
						for (var i = 0; i < this.startCounter; i++) {
							this.memory[i][0] = this.initMemory[i][0];
							this.memory[i][1] = this.initMemory[i][1];
							this.memory[i][2] = this.initMemory[i][2];
							this.memory[i][3] = this.initMemory[i][3];
							//console.log("Line "+i+", Memory: "+this.memory[i]+", InitMem: "+this.initMemory[i]);
						}

						for (var i = 0; i < this.varMemory.length; i++) {
							this.varMemory[i][0] = this.initVarMemory[i][0];
							this.varMemory[i][1] = this.initVarMemory[i][1];
						}

						for (var i = 0; i < this.varRegister.length; i++) {
							this.varRegister[i][0] = this.initVarRegister[i][0];
							this.varRegister[i][1] = this.initVarRegister[i][1];
						}

						var table = document.getElementById(this.tableName);
						var numCells = table.rows[0].cells.length;
						for (var j = 0; j < table.rows.length; j++) {
							for (var i = 0; i < numCells; i++) {
								// console.log("Row "+j+", Cell "+i);
								if (table.rows[j].cells[i].firstChild != null) {
									var temp = parseInt(
											table.rows[j].cells[i].firstChild.nodeValue,
											10);
									if (!(isNaN(temp))) {
										table.rows[j].cells[i].style.color = '#A52A2A';
									} else if (table.rows[j].cells[i].firstChild.nodeValue == '.BLOCK'
											|| table.rows[j].cells[i].firstChild.nodeValue == '.WORD') {
										table.rows[j].cells[i].style.color = '#CC0099';
									} else if (i == 3) {
										table.rows[j].cells[i].style.color = '#0000FF';
									} else {
										table.rows[j].cells[i].style.color = '#000000';
									}

								}
							}
							for (var i = 7; i < 9; i++) {
								table.rows[j].cells[i].style.color = '#007500';
							}
						}

						this.overflowFlag = 0;
						this.negativeFlag = 0;
						this.zeroFlag = 0;
						this.carryFlag = 0;

						this.clearRegister();
						this.done = false;
						this.stop = false;
					};

					// Returns the current value of the program counter
					this.returncounter = function() {
						var progcount = this.programCounter;
						return progcount;
					};

					// Returns value of overflow flag
					this.returnOverflowFlag = function() {
						var overflowflag = this.overflowFlag;
						return overflowflag;
					};

					// Returns value of negative flag
					this.returnNegFlag = function() {
						var negflag = this.negativeFlag;
						return negflag;
					};

					// Returns value of carry flag
					this.returnCarryFlag = function() {
						var carryflag = this.carryFlag;
						return carryflag;
					};

					// Returns value of zero flag
					this.returnZeroFlag = function() {
						var zeroflag = this.zeroFlag;
						return zeroflag;
					};

				};

				this.$get = function() {
					return assembler;
				};

			});
console.log(this.figNum);
tabsstuff.controller(assemblycontroller,
	function($scope, assembler, $interval) {

		$scope.tabs = [];

		$scope.error = function() {
			document.write('<h1>you broke it.</h1>');
		};
		
		var tableName = "program" + figNum;
		var varTable = "variables"+ figNum;
		var bool = false;
		var attemptingToRun = false;
		var previousCounter;
		var running = false;

		var runText = "Run";
		var walkText = "Walk";
		var intervalId;
		var hasRan = false;

		$scope.assembler = new assembler(tableName, varTable, bool);

		$scope.assembler.init();

		$scope.architecture = function(updateCounter) {

			var varmemcount = 0;
			var regcount = 0;
			var memcount = 0;

			$scope.varMemory = [];
			$scope.addVarMemory = function() {
				$scope.varMemory.push({
					title : $scope.assembler.varMemory[varmemcount][0],
					value : $scope.assembler.varMemory[varmemcount][1]
				});
				varmemcount += 1;
			};
			for (var i = 0; i < $scope.assembler.varMemory.length; i++) {
				if ($scope.assembler.varMemory == 0) {
					break;
				}
				$scope.addVarMemory();
			}

			$scope.varRegister = [];
			$scope.addRegister = function() {
				$scope.varRegister.push({
					title : $scope.assembler.varRegister[regcount][0],
					value : $scope.assembler.varRegister[regcount][1]
				});
				regcount += 1;
			};
			for (var i = 0; i < $scope.assembler.varRegister.length; i++) {
				if ($scope.assembler.varRegister == 0) {
					break;
				}
				$scope.addRegister();
			}

			var assemblerReg = $scope.assembler.register;
			var register = [];
			for(var i = 0; i < 16; i++){
				register[i] = $scope.assembler.decimalToHex(assemblerReg[i][1], 4);
			}
			$scope.register = [ {
				content : "0",
				value : register[0]
			}, {
				content : "1",
				value : register[1]
			}, {
				content : "2",
				value : register[2]
			}, {
				content : "3",
				value : register[3]
			}, {
				content : "4",
				value : register[4]
			}, {
				content : "5",
				value : register[5]
			}, {
				content : "6",
				value : register[6]
			}, {
				content : "7",
				value : register[7]
			}, {
				content : "8",
				value : register[8]
			}, {
				content : "9",
				value : register[9]
			}, {
				content : "A",
				value : register[10]
			}, {
				content : "B",
				value : register[11]
			}, {
				content : "C",
				value : register[12]
			}, {
				content : "D",
				value : register[13]
			}, {
				content : "E",
				value : register[14]
			}, {
				content : "F",
				value : register[15]
			}, ];

			var overflowFlag = $scope.assembler.returnOverflowFlag();
			$scope.overflowFlag = [ {
				flag : overflowFlag
			} ];

			var negativeFlag = $scope.assembler.returnNegFlag();
			$scope.negativeFlag = [ {
				flag : negativeFlag
			} ];

			var carryFlag = $scope.assembler.returnCarryFlag();
			$scope.carryFlag = [ {
				flag : carryFlag
			} ];

			var zeroFlag = $scope.assembler.returnZeroFlag();
			$scope.zeroFlag = [ {
				flag : zeroFlag
			} ];

			var temp = $scope.assembler.memory;
			var memory = new Array(256);
			for (var i = 0; i < 256; i++) {
				memory[i] = [ "0", "0", "0", "0" ];
			}
			for (var i = 0; i < 256; i++) {
				for (var j = 0; j < 4; j++) {
					if (typeof temp[i][j] == 'string'
							|| temp[i][j] instanceof String) {
						memory[i][j] = temp[i][j];
					} else {
						memory[i][j] = $scope.assembler.decimalToHex(
								temp[i][j], 1);
					}
				}
			}

			$scope.memory = [];
			$scope.addmemory = function() {
				$scope.memory.push({
					memno : memcount,
					con1 : memory[memcount][0],
					con2 : memory[memcount][1],
					con3 : memory[memcount][2],
					con4 : memory[memcount][3]
				});
				memcount += 1;
			};
			for (var i = 0; i < 256; i++) {
				$scope.addmemory();
			}

			if (updateCounter) {
				var counter = $scope.assembler.returncounter();
				previousCounter = counter;
				$scope.counter = [ {
					content : counter
				} ];
				$scope.instructionRegister = [ {
					con1 : memory[counter][0],
					con2 : memory[counter][1],
					con3 : memory[counter][2],
					con4 : memory[counter][3]
				} ];
			}

			$scope.set_color = function(num) {
				if (running) {
					if (num == previousCounter) {
						return {
							color : "red"
						};
					} else {
						return {
							color : "black"
						};
					}
				}
			};

		};

		$scope.buttonColor = function(button) {
			if (button == "Run") {
				return 'btn btn-success';
			} else if (button == "Walk") {
				return 'btn btn-warning';
			} else if (button == "Pause") {
				return 'btn btn-warning :hover';
			} else if (button == "Reset") {
				return 'btn btn-danger';
			}
		};

		$scope.architecture(true);

		$scope.pause = function() {
			// $scope.assembler.pause();
			$scope.architecture(true);
			$interval.cancel(intervalId);
		};

		$scope.reset = function() {
			$scope.assembler.reset();
			$scope.architecture(true);
			$interval.cancel(intervalId);
			running = false;

		};

		$scope.walk = function() {
			$scope.done = $scope.assembler.done;
			running = true;
			// $scope.memory[counter].set_color(1);
			$scope.architecture(true);
			if (hasRan) {
				$scope.reset();
				hasRan = false;
			}
			if ($scope.assembler.stop == false) {
				$scope.assembler.walk();
			} else {
				$interval.cancel(intervalId);
				// console.log("I've stopped!");
				hasRan = true;
				attemptingToRun = false;
				runText = "Run";
				walkText = "Walk";
				$scope.buttons();
			}
			$scope.architecture(false);

		};

		$scope.run = function() {
			if (!attemptingToRun) {
				if (hasRan) {
					$scope.reset();
					hasRan = false;
				}
				running = true;
				$scope.assembler.run();
				$scope.architecture(true);
				intervalId = $interval($scope.walk, 175);
				// console.log("Run has been called!");
			}
		};

		$scope.buttons = function() {

			$scope.runText = [ {
				name : runText
			} ];
			$scope.walkText = [ {
				name : walkText
			} ];
		};

		$scope.buttons();

		$scope.runButton = function() {
			if (attemptingToRun) {
				$scope.pause();
				runText = "Run";
				walkText = "Walk";
				$scope.buttons();
				attemptingToRun = false;
			} else {
				runText = "Pause";
				walkText = "Reset";
				$scope.buttons();
				$scope.run();
				attemptingToRun = true;
			}
		};

		$scope.walkButton = function() {
			if (!attemptingToRun) {
				$scope.walk();
			} else {
				$scope.reset();
				runText = "Run";
				walkText = "Walk";
				$scope.buttons();
				attemptingToRun = false;
			}
		};

	});
}
