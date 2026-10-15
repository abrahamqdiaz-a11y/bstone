/**
 * Social proof. Both lists are intentionally empty. Add entries only with the
 * client's written permission, exactly as they were given — never edited into
 * something they didn't say, and never invented. Components that use these
 * render nothing while the lists are empty.
 */
export type Testimonial = {
  quote: string;
  /** First name + last initial, or a role ("Executor, Kirkland"), as approved. */
  attribution: string;
  context?: string;
  /** Where the review originally appeared, e.g. "Google". */
  source?: string;
};

export type ProjectExample = {
  title: string;
  summary: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
};

export const testimonials: Testimonial[] = [];
export const projectExamples: ProjectExample[] = [];
