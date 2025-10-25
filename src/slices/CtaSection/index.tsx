/**
 * DEFAULT CONTENT FOR PRISMIC (Copy-Paste diese Werte in Prismic):
 *
 * Heading (h2):
 *   "Lust auf mehr Rückerstattung?"
 *
 * Description:
 *   "Wir schauen uns Ihre Steuersituation an und finden gemeinsam, was wirklich für Sie drin ist. Ohne Fachchinesisch. Versprochen."
 *
 * Primary CTA:
 *   - Text: "Termin buchen"
 *   - URL: #
 *
 * Secondary CTA:
 *   - Text: "Wie wir arbeiten"
 *   - URL: #
 */

import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

export type CtaSectionProps = SliceComponentProps<Content.CtaSectionSlice>;

const CtaSection = ({ slice }: CtaSectionProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white"
    >
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {isFilled.richText(slice.primary.heading) && (
            <PrismicRichText
              field={slice.primary.heading}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                    {children}
                  </h2>
                ),
              }}
            />
          )}

          {isFilled.richText(slice.primary.description) && (
            <PrismicRichText
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => (
                  <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
                    {children}
                  </p>
                ),
              }}
            />
          )}

          <div className="mt-10 flex items-center justify-center gap-x-6">
            {isFilled.link(slice.primary.primaryCta) && (
              <PrismicNextLink
                field={slice.primary.primaryCta}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              />
            )}

            {isFilled.link(slice.primary.secondaryCta) && (
              <PrismicNextLink
                field={slice.primary.secondaryCta}
                className="text-sm/6 font-semibold text-gray-900"
              >
                {slice.primary.secondaryCta.text} <span aria-hidden="true">→</span>
              </PrismicNextLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
