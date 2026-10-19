/**
 * Social proof. Both lists are intentionally empty. Add entries only with the
 * client's written permission, exactly as they were given — never edited into
 * something they didn't say, and never invented. Components that use these
 * render nothing while the lists are empty.
 *
 * No star-rating or review structured data is emitted. Add it only once there
 * are real reviews and a decision to mark them up.
 */
export type Review = {
  /** Verbatim text, as the client wrote it. */
  quote: string;
  /** First name + last initial, or a role ("Executor, Venice"), as approved. */
  attribution: string;
  context?: string;
  /** Where the review originally appeared, e.g. "Google". */
  source?: string;
  /** Link to the original review, if public. */
  sourceUrl?: string;
};

export type ProjectExample = {
  title: string;
  summary: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
};

export const reviews: Review[] = [];
export const projectExamples: ProjectExample[] = [];
