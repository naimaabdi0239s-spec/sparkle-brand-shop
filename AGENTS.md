<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Use a shared StoreShell in the root route for navigation, footer and an in-memory shopping bag; this preserves consistent presentation across all pages.
- Keep catalog and policy content in browser-safe data modules and give every content page its own TanStack route and metadata; this keeps product links and policy URLs independently accessible.
- Serve uploaded photos through asset pointers with lossless WebP compression and explicit homepage dimensions; this preserves photo quality while reducing downloads and layout shifts.
- Do not present successful payments, subscriptions or message delivery without a connected provider; current email forms open explicit email drafts.
- Manage carousel timers inside a cleaned-up React effect and respect reduced-motion preferences; this avoids leaked timers and unwanted automatic motion.
