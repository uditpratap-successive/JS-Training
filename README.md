# JS-Training
What Atomic design basically is ?

There are five steps which are seperate and can work togethor to build more coherent, hierarchical and thoughtful interface design system and it is called Atomic design.

The five different stages of atomic design are:
1-Atoms
2-Molecules
3-Organisms
4-Templates
5-Pages

Now we will see the seperate explaination of each stage:

<h2>Atoms</h2>

As we know that in science, an atom is the smallest unit of depend that makes up a chemical element, in addition to the smallest unit of a cell. Every solid, liquid, gas, and plasma is made from impartial or ionized atoms.Similarly, in design, atoms are the most basic components. They are the building blocks of design such as buttons, lines, shapes, icons, text fields, text labels, etc.

<h2>Molecules</h2>

Group of atoms when combined togethor is called the Molecules.We can understood it as the combination of input field and the button during the login session.
These molecules are the building blocks of more complex components and interfaces. They typically encapsulate a set of related elements that work together to perform a specific function or represent a specific concept.

<h2>Organisms</h2>

In atomic design methodology, "organisms" represent larger, more complex components that are composed of groups of molecules and/or other organisms. They are combinations of molecules and/or atoms that work together to form a distinct section of a user interface.

Organisms encapsulate a higher level of functionality and represent recognizable sections of a user interface. They often consist of multiple molecules and sometimes even other organisms nested within them.

<h2>Templates</h2>

In atomic design, "templates" represent higher-level structures that define the overall layout and composition of a page or interface. They are compositions of organisms and/or molecules arranged in a specific way to create a particular page or view.

Templates provide a framework for organizing and structuring content and components within a user interface. They establish the basic layout, hierarchy, and positioning of organisms and molecules, while allowing for flexibility and variation in content.

<h2>Pages</h2>

In atomic design, "pages" represent the highest level of the design hierarchy. They are instances of templates filled with specific content and data, resulting in fully realized user interface views or screens.

Pages are the actual representations of what users see and interact with in an application or website. They combine templates, organisms, molecules, and atoms to create cohesive and functional user experiences.


<h2>Benefits of following Atomic design:</h2>

1.Modularity: Atomic design breaks down UI elements into smaller, reusable components called atoms, molecules, organisms, templates, and pages.

2.Hierarchy: It establishes a hierarchical structure for organizing UI components, enabling scalability and flexibility in design systems.

3.Consistency: By using consistent naming conventions and design patterns, atomic design promotes visual and functional consistency across the user interface.

4.Reusability: Components created in atomic design can be easily reused across different parts of an application or website, saving time and effort in development.

5.Collaboration: It facilitates collaboration between designers and developers by providing a shared language and framework for discussing and working on UI components.

6.Responsive Design: Atomic design is well-suited for responsive design practices, allowing UI components to adapt seamlessly to different screen sizes and devices.


<h1> Twelve-Factor App</h1>

 the Twelve-Factor App methodology is a set of best practices for building modern, scalable, and maintainable web applications. Each factor addresses a different aspect of the application's development and deployment process.

<h2>1 .Codebase</h2>

The application has a single codebase tracked in version control, such as Git.

<h2>2. Dependencies</h2>

All dependencies, including system tools and libraries, are explicitly declared and isolated.

<h2> 3. Config</h2>

Configuration is stored in the environment and can be easily changed between deployments.

<h2> 4. Backing Services</h2>

The app treats third-party services as attached resources, accessed via a URL or other connection details stored in the environment.

<h2> 5. Build, release, run</h2>

The build and release stages are separate, and the release can be easily tracked and reproduced.

<h2>6. Processes</h2>

The app is executed as one or more stateless processes, with no shared state, allowing for easy scaling.

<h2> 7. Port Binding</h2>

The app exports services via port binding and is self-contained, making it easy to deploy with minimal dependencies.

<h2> 8. Concurrency</h2>

Concurrency is achieved by scaling out the stateless processes, making it easy to scale the application horizontally.

<h2> 9. Disposability</h2>

The app can be started or stopped quickly, facilitating easy scaling up or down based on demand.

<h2> 10. Dev/Prod Parity</h2>

The development, staging, and production environments are as similar as possible, reducing the risk of issues when deploying.

<h2>11. Logs</h2>

Logs are treated as event streams, and the app does not concern itself with routing or storage of log entries.

<h2>12. Admin Processes</h2>

Any admin tasks, such as database migrations or one-time scripts, are run as one-off processes.

