/* eslint-disable @typescript-eslint/naming-convention */
import { SmoresNode } from "../../model/smoresNode";
import * as schema from '../../model/smoresDataSchema';

import { 
  createHistoryTable,
  createReferenceTable,
  createGlossaryTable,
  createIntroduction,
  documentStart,
  createOverallDescription
 } from "./documentParts";

export function createNodesForSRSFull(docNode:SmoresNode) {
  createHistoryTable(docNode);
  const node_1 = createIntroduction(docNode);
  createGlossaryTable(node_1);
  createReferenceTable(node_1);
  const path_1_5 = node_1.newItem(schema.headingType, "Overview");
  const node_1_5 = new SmoresNode(path_1_5!);
  node_1_5.newItem(schema.commentType, "This subsection should   \n- Describe what the rest of the SRS contains   \n- Explain how the SRS is organized.");
  const path_2 = docNode.newItem(schema.headingType, "Overall description");
  const node_2 = new SmoresNode(path_2!);
  node_2.newItem(schema.commentType, "This section of the SRS should describe the general factors that affect the product and its requirements. This section does not state specific requirements. Instead, it provides a background for those requirements, which are defined in detail in Section 3 of the SRS, and makes them easier to understand.   \nThis section usually consists of six subsections, as follows:   \n- Product perspective   \n- Product functions   \n- User characteristics   \n- Constraints   \n- Assumptions and dependencies   \n- Apportioning of requirements.");
  const path_2_1 = node_2.newItem(schema.headingType, "Product perspective");
  const node_2_1 = new SmoresNode(path_2_1!);
  node_2_1.newItem(schema.commentType, "This subsection of the SRS should put the product into perspective with other related products. If the product is independent and totally self-contained, it should be so stated here. If the SRS defines a product that is a component of a larger system, as frequently occurs, then this subsection should relate the requirements of that larger system to functionality of the software and should identify interfaces between that system and the software.   \n\nA block diagram showing the major components of the larger system, interconnections, and external inter- faces can be helpful.   \n\nThis subsection should also describe how the software operates inside various constraints. For example, these constraints could include   \n- System interfaces   \n- User interfaces   \n- Hardware interfaces   \n- Software interfaces   \n- Communications interfaces   \n- Memory   \n- Operations   \n- Site adaptation requirements");
  const path_2_1_1 = node_2_1.newItem(schema.headingType, "System interfaces");
  const node_2_1_1 = new SmoresNode(path_2_1_1!);
  node_2_1_1.newItem(schema.commentType, "This should list each system interface and identify the functionality of the software to accomplish the system requirement and the interface description to match the system.");
  const path_2_1_2 = node_2_1.newItem(schema.headingType, "User interfaces");
  const node_2_1_2 = new SmoresNode(path_2_1_2!);
  node_2_1_2.newItem(schema.commentType, "This should specify the following:   \n- The logical characteristics of each interface between the software product and its users. This includes those configuration characteristics (e.g., required screen formats, page or window layouts, content of any reports or menus, or availability of programmable function keys) necessary to accomplish the software requirements.   \n- All the aspects of optimizing the interface with the person who must use the system. This may simply comprise a list of do's and don'ts on how the system will appear to the user. One example may be a requirement for the option of long or short error messages. Like all others, these requirements should be verifiable, e.g., “a clerk typist grade 4 can do function X in Z min after 1 h of training” rather than “a typist can do function X.” (This may also be specified in the Software System Attributes under a section titled Ease of Use.)");
  const path_2_1_3 = node_2_1.newItem(schema.headingType, "Hardware interfaces");
  const node_2_1_3 = new SmoresNode(path_2_1_3!);
  node_2_1_3.newItem(schema.commentType, "This should specify the logical characteristics of each interface between the software product and the hard- ware components of the system. This includes configuration characteristics (number of ports, instruction sets, etc.). It also covers such matters as what devices are to be supported, how they are to be supported, and protocols. For example, terminal support may specify full-screen support as opposed to line-by-line support.");
  const path_2_1_4 = node_2_1.newItem(schema.headingType, "Software interfaces");
  const node_2_1_4 = new SmoresNode(path_2_1_4!);
  node_2_1_4.newItem(schema.commentType, "This should specify the use of other required software products (e.g., a data management system, an operating system, or a mathematical package), and interfaces with other application systems (e.g., the linkage between an accounts receivable system and a general ledger system). For each required software product, the following should be provided:   \n- Name   \n- Mnemonic   \n- Specification number   \n- Version number   \n- Source   \n\nFor each interface, the following should be provided:   \n- Discussion of the purpose of the interfacing software as related to this software product.   \n- Definition of the interface in terms of message content and format. It is not necessary to detail any well-documented interface, but a reference to the document defining the interface is required.");
  const path_2_1_5 = node_2_1.newItem(schema.headingType, "Communications interfaces");
  const node_2_1_5 = new SmoresNode(path_2_1_5!);
  node_2_1_5.newItem(schema.commentType, "This should specify the various interfaces to communications such as local network protocols, etc.");
  const path_2_1_6 = node_2_1.newItem(schema.headingType, "Memory constraints");
  const node_2_1_6 = new SmoresNode(path_2_1_6!);
  node_2_1_6.newItem(schema.commentType, "This should specify any applicable characteristics and limits on primary and secondary memory.");
  const path_2_1_7 = node_2_1.newItem(schema.headingType, "Operations");
  const node_2_1_7 = new SmoresNode(path_2_1_7!);
  node_2_1_7.newItem(schema.commentType, "This should specify the normal and special operations required by the user such as   \n- The various modes of operations in the user organization (e.g., user-initiated operations)   \n- Periods of interactive operations and periods of unattended operations   \n- Data processing support functions   \n- Backup and recovery operations.   \nNOTE-This is sometimes specified as part of the User Interfaces section.");
  const path_2_1_8 = node_2_1.newItem(schema.headingType, "Site adaptation requirements");
  const node_2_1_8 = new SmoresNode(path_2_1_8!);
  node_2_1_8.newItem(schema.commentType, "This should   \n- Define the requirements for any data or initialization sequences that are specific to a given site, mission, or operational mode (e.g., grid values, safety limits, etc.)   \n- Specify the site or mission-related features that should be modified to adapt the software to a particular installation.");
  const path_2_2 = node_2.newItem(schema.headingType, "Product functions");
  const node_2_2 = new SmoresNode(path_2_2!);
  node_2_2.newItem(schema.commentType, "This subsection of the SRS should provide a summary of the major functions that the software will perform. For example, an SRS for an accounting program may use this part to address customer account maintenance, customer statement, and invoice preparation without mentioning the vast amount of detail that each of those functions requires.   \nSometimes the function summary that is necessary for this part can be taken directly from the section of the higher-level specification (if one exists) that allocates particular functions to the software product. Note that for the sake of clarity   \n-The functions should be organized in a way that makes the list of functions understandable to the customer or to anyone else reading the document for the first time.   \n-Textual or graphical methods can be used to show the different functions and their relationships. Such a diagram is not intended to show a design of a product, but simply shows the logical relationships among variables.");
  const path_2_3 = node_2.newItem(schema.headingType, "User characteristics");
  const node_2_3 = new SmoresNode(path_2_3!);
  node_2_3.newItem(schema.commentType, "This subsection of the SRS should describe those general characteristics of the intended users of the product including educational level, experience, and technical expertise. It should not be used to state specific requirements, but rather should provide the reasons why certain specific requirements are later specified in Section 3 of the SRS.");
  const path_2_4 = node_2.newItem(schema.headingType, "Constraints");
  const node_2_4 = new SmoresNode(path_2_4!);
  node_2_4.newItem(schema.commentType, "This subsection of the SRS should provide a general description of any other items that will limit the developer’s options. These include   \n- Regulatory policies   \n- Hardware limitations (e.g., signal timing requirements)   \n- Interfaces to other applications   \n- Parallel operation   \n- Audit functions   \n- Control functions   \n- Higher-order language requirements   \n- Signal handshake protocols (e.g., XON-XOFF, ACK-NACK)   \n- Reliability requirements   \n- Criticality of the application   \n- Safety and security considerations");
  const path_2_5 = node_2.newItem(schema.headingType, "Assumptions and dependencies");
  const node_2_5 = new SmoresNode(path_2_5!);
  node_2_5.newItem(schema.commentType, "This subsection of the SRS should list each of the factors that affect the requirements stated in the SRS. These factors are not design constraints on the software but are, rather, any changes to them that can affect the requirements in the SRS. For example, an assumption may be that a specific operating system will be available on the hardware designated for the software product. If, in fact, the operating system is not avail- able, the SRS would then have to change accordingly.");
  const path_2_6 = node_2.newItem(schema.headingType, "Apportioning of requirements");
  const node_2_6 = new SmoresNode(path_2_6!);
  node_2_6.newItem(schema.commentType, "This subsection of the SRS should identify requirements that may be delayed until future versions of the system.");
  const path_3 = docNode.newItem(schema.headingType, "Specific requirements");
  const node_3 = new SmoresNode(path_3!);
  node_3.newItem(schema.commentType, "This section of the SRS should contain all of the software requirements to a level of detail sufficient to enable designers to design a system to satisfy those requirements, and testers to test that the system satisfies those requirements. Throughout this section, every stated requirement should be externally perceivable by users, operators, or other external systems. These requirements should include at a minimum a description of every input (stimulus) into the system, every output (response) from the system, and all functions performed by the system in response to an input or in support of an output. As this is often the largest and most important part of the SRS, the following principles apply:   \n- Specific requirements should be stated in conformance with all the characteristics described in 4.3.   \n- Specific requirements should be cross-referenced to earlier documents that relate.   \n- All requirements should be uniquely identifiable (this is handled by Doors Smores).   \n- Careful attention should be given to organizing the requirements to maximize readability.   \nBefore examining specific ways of organizing the requirements it is helpful to understand the various items that comprise requirements as described in 5.3.1 through 5.3.7.");
  const path_3_1 = node_3.newItem(schema.headingType, "External interfaces");
  const node_3_1 = new SmoresNode(path_3_1!);
  node_3_1.newItem(schema.commentType, "This should be a detailed description of all inputs into and outputs from the software system. It should complement the interface descriptions in 5.2 and should not repeat information there.   \nIt should include both content and format as follows   \n- Name of item   \n- Description of purpose   \n- Source of input or destination of output   \n- Valid range, accuracy, and/or tolerance   \n- Units of measure   \n- Timing   \n- Relationships to other inputs/outputs   \n- Screen formats/organization   \n- Window formats/organization   \n- Data formats   \n- Command formats   \n- End messages.");
  const path_3_2 = node_3.newItem(schema.headingType, "Functions");
  const node_3_2 = new SmoresNode(path_3_2!);
  node_3_2.newItem(schema.commentType, "Functional requirements should define the fundamental actions that must take place in the software in accepting and processing the inputs and in processing and generating the outputs. These are generally listed as “shall” statements starting with “The system shall...”   \nThese include   \n- Validity checks on the inputs   \n- Exact sequence of operations   \n- Responses to abnormal situations, including   \n    - Overflow   \n    - Communication facilities   \n    - Error handling and recovery   \n- Effect of parameters   \n- Relationship of outputs to inputs, including   \n    - Input/output sequences   \n    - Formulas for input to output conversion   \nIt may be appropriate to partition the functional requirements into subfunctions or subprocesses. This does not imply that the software design will also be partitioned that way.");
  const path_3_3 = node_3.newItem(schema.headingType, "Performance requirements");
  const node_3_3 = new SmoresNode(path_3_3!);
  node_3_3.newItem(schema.commentType, "This subsection should specify both the static and the dynamic numerical requirements placed on the soft- ware or on human interaction with the software as a whole. Static numerical requirements may include the following:   \n- The number of terminals to be supported   \n- The number of simultaneous users to be supported   \n- Amount and type of information to be handled.   \nStatic numerical requirements are sometimes identified under a separate section entitled Capacity.   \nDynamic numerical requirements may include, for example, the numbers of transactions and tasks and the amount of data to be processed within certain time periods for both normal and peak workload conditions.   \nAll of these requirements should be stated in measurable terms. For example,   \n95% of the transactions shall be processed in less than 1 s.   \nrather than,   \nAn operator shall not have to wait for the transaction to complete.   \nNOTE-Numerical limits applied to one specific function are normally specified as part of the processing subparagraph description of that function.");
  const path_3_4 = node_3.newItem(schema.headingType, "Logical database requirements");
  const node_3_4 = new SmoresNode(path_3_4!);
  node_3_4.newItem(schema.commentType, "This should specify the logical requirements for any information that is to be placed into a database. This may include the following:   \n- Types of information used by various functions   \n- Frequency of use   \n- Accessing capabilities   \n- Data entities and their relationships   \n- Integrity constraints   \n- Data retention requirements");
  const path_3_5 = node_3.newItem(schema.headingType, "Design constraints");
  const node_3_5 = new SmoresNode(path_3_5!);
  node_3_5.newItem(schema.commentType, "This should specify design constraints that can be imposed by other standards, hardware limitations, etc.");
  const path_3_5_1 = node_3_5.newItem(schema.headingType, "Standards compliance");
  const node_3_5_1 = new SmoresNode(path_3_5_1!);
  node_3_5_1.newItem(schema.commentType, "This subsection should specify the requirements derived from existing standards or regulations. They may include the following:   \n- Report format   \n- Data naming   \n- Accounting procedures   \n- Audit tracing   \nFor example, this could specify the requirement for software to trace processing activity. Such traces are needed for some applications to meet minimum regulatory or financial standards. An audit trace requirement may, for example, state that all changes to a payroll database must be recorded in a trace file with before and after values.");
  const path_3_6 = node_3.newItem(schema.headingType, "Software system attributes");
  const node_3_6 = new SmoresNode(path_3_6!);
  node_3_6.newItem(schema.commentType, "There are a number of attributes of software that can serve as requirements. It is important that required attributes be specified so that their achievement can be objectively verified. Subclauses 5.3.6.1 through 5.3.6.5 provide a partial list of examples.");
  const path_3_6_1 = node_3_6.newItem(schema.headingType, "Reliability");
  const node_3_6_1 = new SmoresNode(path_3_6_1!);
  node_3_6_1.newItem(schema.commentType, "This should specify the factors required to establish the required reliability of the software system at time of delivery.");
  const path_3_6_2 = node_3_6.newItem(schema.headingType, "Availability");
  const node_3_6_2 = new SmoresNode(path_3_6_2!);
  node_3_6_2.newItem(schema.commentType, "This should specify the factors required to guarantee a defined availability level for the entire system such as checkpoint, recovery, and restart.");
  const path_3_6_3 = node_3_6.newItem(schema.headingType, "Security");
  const node_3_6_3 = new SmoresNode(path_3_6_3!);
  node_3_6_3.newItem(schema.commentType, "This should specify the factors that protect the software from accidental or malicious access, use, modification, destruction, or disclosure. Specific requirements in this area could include the need to:   \n- Utilize certain cryptographical techniques   \n- Keep specific log or history data sets   \n- Assign certain functions to different modules   \n- Restrict communications between some areas of the program   \n- Check data integrity for critical variables.");
  const path_3_6_4 = node_3_6.newItem(schema.headingType, "Maintainability");
  const node_3_6_4 = new SmoresNode(path_3_6_4!);
  node_3_6_4.newItem(schema.commentType, "This should specify attributes of software that relate to the ease of maintenance of the software itself. There may be some requirement for certain modularity, interfaces, complexity, etc. Requirements should not be placed here just because they are thought to be good design practices.");
  const path_3_6_5 = node_3_6.newItem(schema.headingType, "Portability");
  const node_3_6_5 = new SmoresNode(path_3_6_5!);
  node_3_6_5.newItem(schema.commentType, "This should specify attributes of software that relate to the ease of porting the software to other host machines and/or operating systems. This may include the following:   \n- Percentage of components with host-dependent code   \n- Percentage of code that is host dependent   \n- Use of a proven portable language   \n- Use of a particular compiler or language subset   \n- Use of a particular operating system.");
  const path_3_7 = node_3.newItem(schema.headingType, "Organizing the specific requirements");
  const node_3_7 = new SmoresNode(path_3_7!);
  node_3_7.newItem(schema.commentType, "For anything but trivial systems the detailed requirements tend to be extensive. For this reason, it is recommended that careful consideration be given to organizing these in a manner optimal for understanding. There is no one optimal organization for all systems. Different classes of systems lend themselves to different organizations of requirements in Section 3 of the SRS. Some of these organizations are described in 5.3.7.1 through 5.3.7.7.");
  const path_3_7_1 = node_3_7.newItem(schema.headingType, "System mode");
  const node_3_7_1 = new SmoresNode(path_3_7_1!);
  node_3_7_1.newItem(schema.commentType, "Some systems behave quite differently depending on the mode of operation. For example, a control system may have different sets of functions depending on its mode: training, normal, or emergency. When organizing this section by mode, the outline in A.1 or A.2 should be used. The choice depends on whether interfaces and performance are dependent on mode.");
  const path_3_7_2 = node_3_7.newItem(schema.headingType, "User class");
  const node_3_7_2 = new SmoresNode(path_3_7_2!);
  node_3_7_2.newItem(schema.commentType, "Some systems provide different sets of functions to different classes of users. For example, an elevator control system presents different capabilities to passengers, maintenance workers, and fire fighters. When organizing this section by user class, the outline in A.3 should be used.");
  const path_3_7_3 = node_3_7.newItem(schema.headingType, "Objects");
  const node_3_7_3 = new SmoresNode(path_3_7_3!);
  node_3_7_3.newItem(schema.commentType, "Objects are real-world entities that have a counterpart within the system. For example, in a patient monitor- ing system, objects include patients, sensors, nurses, rooms, physicians, medicines, etc. Associated with each object is a set of attributes (of that object) and functions (performed by that object). These functions are also called services, methods, or processes. When organizing this section by object, the outline in A.4 should be used. Note that sets of objects may share attributes and services. These are grouped together as classes.");
  const path_3_7_4 = node_3_7.newItem(schema.headingType, "Feature");
  const node_3_7_4 = new SmoresNode(path_3_7_4!);
  node_3_7_4.newItem(schema.commentType, "A feature is an externally desired service by the system that may require a sequence of inputs to effect the desired result. For example, in a telephone system, features include local call, call forwarding, and conference call. Each feature is generally described in a sequence of stimulus-response pairs. When organizing this section by feature, the outline in A.5 should be used.");
  const path_3_7_5 = node_3_7.newItem(schema.headingType, "Stimulus");
  const node_3_7_5 = new SmoresNode(path_3_7_5!);
  node_3_7_5.newItem(schema.commentType, "Some systems can be best organized by describing their functions in terms of stimuli. For example, the functions of an automatic aircraft landing system may be organized into sections for loss of power, wind shear, sudden change in roll, vertical velocity excessive, etc. When organizing this section by stimulus, the outline in A.6 should be used.");
  const path_3_7_6 = node_3_7.newItem(schema.headingType, "Response");
  const node_3_7_6 = new SmoresNode(path_3_7_6!);
  node_3_7_6.newItem(schema.commentType, "Some systems can be best organized by describing all the functions in support of the generation of a response. For example, the functions of a personnel system may be organized into sections corresponding to all functions associated with generating paychecks, all functions associated with generating a current list of employees, etc. The outline in A.6 (with all occurrences of stimulus replaced with response) should be used.");
  const path_3_7_7 = node_3_7.newItem(schema.headingType, "Functional hierarchy");
  const node_3_7_7 = new SmoresNode(path_3_7_7!);
  node_3_7_7.newItem(schema.commentType, "When none of the above organizational schemes prove helpful, the overall functionality can be organized into a hierarchy of functions organized by either common inputs, common outputs, or common internal data access. Data flow diagrams and data dictionaries can be used to show the relationships between and among the functions and data. When organizing this section by functional hierarchy, the outline in A.7 should be used.");
}

export function createNodesForSRSMini(docNode:SmoresNode) {
  documentStart(docNode);
  createOverallDescription(docNode);
  const path_3 = docNode.newItem(schema.headingType, "Software Requirements");
  const node_3 = new SmoresNode(path_3!);
  node_3.newItem(schema.commentType, "If you plan on breaking requirements down into categories, explain that. Then get down to it.");

}
