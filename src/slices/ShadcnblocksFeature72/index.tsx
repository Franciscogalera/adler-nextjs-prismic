/**
 * DEFAULT CONTENT FOR PRISMIC (Copy-Paste diese Werte in Prismic):
 *
 * Title (h2):
 *   "Unsere Leistungen"
 *
 * Description:
 *   "Von der Steuererklärung bis zur strategischen Unternehmensberatung – wir begleiten Sie in allen steuerlichen Angelegenheiten. Professionell, zuverlässig und immer auf dem neuesten Stand."
 *
 * Button:
 *   - Text: "Termin vereinbaren"
 *   - URL: #
 *
 * Features (4 Karten):
 *
 *   Feature 1 - Jahresabschlüsse:
 *     - Heading (h3): "Jahresabschlüsse"
 *     - Description: "Professionelle Erstellung von Jahresabschlüssen nach HGB und IFRS. Wir sorgen für rechtssichere und aussagekräftige Finanzberichte."
 *     - Image: https://images.unsplash.com/photo-1554224311-beee460ae6ba
 *     - Alt: "Jahresabschlüsse und Finanzberichte"
 *     - URL: #jahresabschluesse
 *
 *   Feature 2 - Lohnbuchhaltung:
 *     - Heading (h3): "Lohnbuchhaltung"
 *     - Description: "Komplette Abwicklung Ihrer Lohn- und Gehaltsabrechnung. Von der monatlichen Abrechnung bis zur Kommunikation mit den Sozialversicherungsträgern."
 *     - Image: https://images.unsplash.com/photo-1454165804606-c3d57bc86b40
 *     - Alt: "Lohnbuchhaltung und Gehaltsabrechnung"
 *     - URL: #lohnbuchhaltung
 *
 *   Feature 3 - Steuerplanung:
 *     - Heading (h3): "Steuerplanung"
 *     - Description: "Vorausschauende Steuergestaltung für Unternehmen und Privatpersonen. Wir entwickeln Strategien zur legalen Steueroptimierung und helfen Ihnen, Steuern zu sparen."
 *     - Image: https://images.unsplash.com/photo-1460925895917-afdab827c52f
 *     - Alt: "Steuerplanung und Optimierung"
 *     - URL: #steuerplanung
 *
 *   Feature 4 - Unternehmensgründung:
 *     - Heading (h3): "Unternehmensgründung"
 *     - Description: "Begleitung von der ersten Idee bis zur erfolgreichen Gründung. Wir beraten Sie zur optimalen Rechtsform, helfen bei Behördengängen und erstellen Ihren Businessplan."
 *     - Image: https://images.unsplash.com/photo-1556761175-b413da4baf72
 *     - Alt: "Unternehmensgründung und Beratung"
 *     - URL: #unternehmensgruendung
 */

import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

export type ShadcnblocksFeature72Props =
  SliceComponentProps<Content.ShadcnblocksFeature72Slice>;

const ShadcnblocksFeature72 = ({ slice }: ShadcnblocksFeature72Props) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-8 lg:max-w-sm">
          {isFilled.richText(slice.primary.title) && (
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
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
                  <p className="text-muted-foreground mb-8 text-gray-600 lg:text-lg">
                    {children}
                  </p>
                ),
              }}
            />
          )}
          {isFilled.link(slice.primary.button) && (
            <PrismicNextLink
              field={slice.primary.button}
              className="group flex items-center font-medium text-indigo-600 hover:text-indigo-500 md:text-base lg:text-lg"
            >
              {slice.primary.button.text}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 size-5 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </PrismicNextLink>
          )}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {slice.primary.features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col overflow-clip rounded-xl border border-gray-200"
            >
              {isFilled.link(feature.url) && isFilled.image(feature.image) ? (
                <PrismicNextLink field={feature.url}>
                  <PrismicNextImage
                    field={feature.image}
                    className="aspect-video h-full w-full object-cover object-center transition-opacity hover:opacity-80"
                  />
                </PrismicNextLink>
              ) : (
                isFilled.image(feature.image) && (
                  <PrismicNextImage
                    field={feature.image}
                    className="aspect-video h-full w-full object-cover object-center"
                  />
                )
              )}
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                {isFilled.richText(feature.heading) && (
                  <PrismicRichText
                    field={feature.heading}
                    components={{
                      heading3: ({ children }) => (
                        <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                          {children}
                        </h3>
                      ),
                    }}
                  />
                )}
                {isFilled.richText(feature.description) && (
                  <PrismicRichText
                    field={feature.description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-gray-600 lg:text-lg">{children}</p>
                      ),
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShadcnblocksFeature72;
