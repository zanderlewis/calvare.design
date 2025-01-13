# Auto-Merge PRs by Calvare16

This repository includes a GitHub Actions workflow to automatically merge pull requests (PRs) created by Calvare16. This workflow is designed to streamline the process of merging PRs by automating the approval and merge steps.

## Configuration

To enable the auto-merge functionality, follow these steps:

1. Ensure you have a GitHub Personal Access Token (PAT) with the `repo` and `workflow` scopes. This token will be used to authenticate the workflow.
2. Add the PAT as a secret in your GitHub repository. Go to `Settings > Secrets > Actions` and create a new secret named `GH_PAT`.
3. Create a new file in your repository at `.github/workflows/auto-merge.yml` with the following content:

```yaml
name: Auto-Merge PRs by Calvare16

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  auto-merge:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Enable auto-merge
        uses: peter-evans/enable-pull-request-automerge@v2
        with:
          token: ${{ secrets.GH_PAT }}
          pull-request-number: ${{ github.event.pull_request.number }}
          merge-method: squash
          author-association: OWNER
          author: Calvare16
```

## Usage

Once the workflow is configured, any pull request created by Calvare16 will be automatically merged if it meets the specified conditions. The workflow will:

1. Trigger on pull request events (opened, synchronize, reopened).
2. Checkout the repository.
3. Enable auto-merge for the pull request using the `peter-evans/enable-pull-request-automerge` action.
4. Merge the pull request using the `squash` method if the author is Calvare16 and the author association is `OWNER`.

This setup ensures that PRs by Calvare16 are automatically merged, reducing the manual effort required to manage contributions.
