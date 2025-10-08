# 🪲 BeetleKeys - Sprint Logs

This folder contains all sprint logs for the **BeetleKeys** project.
Each sprint is documented with goals, tasks, notes, and outcomes following a consistent template.

---

## 📂 Structure

- **/sprintX/** ➞ folder for each sprint (X = sprint number).
  - `sprintX.md` ➞ Hub summary (overview of the sprint).
  - `goals.md` ➞ Expanded sprint goals.
  - `tasks.md` ➞ Task beakdown (checked daily/weekly)
  - `commute_notes.md` ➞ Raw brainstorm notes for commutes.
  - `review.md` ➞ Final review & testing notes.

Example:

``` text
/docs/
      sprints/
              sprint1/
                    sprint1.md
                    goals.md
                    tasks.md
                    commute_notes.md
                    review.md
              sprint2/
                    sprint2.md
                    ...
```

---

## 🌀 Sprint Cycle (2 Weeks)

Each sprint runs for **2 Weeks** with a simple cycle:

1. **Plan** ➞ define sprint goals and must-hhave tasks.
2. **Build** ➞ implement features (coding sessions).
3. **Stabilize** ➞ debug, polish, and complete missing pieces.
4. **Review & Tests** ➞ confirm sprint outcome and document lessons learned.

---

## 🖊️ How to Create a New Sprint

1. Copy the previous sprint folder:

    ``` bash
    cd docs/sprints && cp -r template sprintX 
    ```
      <!--  fill the number manually(or just duplicate manually if on windows)--->

2. Rename the files (sprintX.md etc).
3. Update the Dates and Goals in sprintN+1.md.
4. Fill out the following files as the sprint progresses:
   - goals.md ➞ define clear deliverables for the sprint
   - task.md ➞ break down work into checklists.
   - commute_notes.md ➞ paste your daily brainstorms from mobile or wirte directly
   - review.md ➞ sumarize progress, bugs fixed, blockers, lessons.

## 📌 Notes

- Keep each sprint self-contained.
- Judges will likely only skim sprintX.md hub summaries ➞ keep them short and clear.
- Use sub-files (tasks.md, commute_notes.md) for your own detailed work.
  